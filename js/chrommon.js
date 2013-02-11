/**
 * @overview
 *
 * @author 闲耘™ (hotoo.cn[AT]gmail.com)
 * @version 2013/01/03
 */

window.chrommon = (function(win, util){
  var defaultOptions = {
    mode: "background",
    base_css: "css/",
    base_js: "js/",
    debug: true
  };

  var debugLog = function(){
    if(!defaultOptions.debug){return;}
    var msg = Array.prototype.join.call(arguments, "");
    if(defaultOptions.mode==="background"){
      alert("debug: " + msg);
    }else{
      console.log("debug:", msg);
    }
  };

  var ext_js = ".js";
  var ext_json = ".json";
  var ext_css = ".css";
  var ext_xml = ".xml";
  var loaded_module = {};   // 已经加载的模块集。
  var loading_module = null;// {String} 正在加载的模块名
  var load_queue = [];      // 待加载的模块列表。
  var _load_queue = {};     // 待加载的模块列表映射，便于快速查询。
  var callbacks = [];       // 回调函数列表。
  var defines = [];         // 定义模块列表，主要用于内部依赖其他模块的场景。

  var dependencies = (function(){
    var _data = {};

    return {
      add: function(name, deps){
        _data[name] = deps;
      },
      get: function(name){
        if(!name){return _data;}
        var deps = [];
        if(_data.hasOwnProperty(name)){
          deps.concat(_data[name]);
          for(var i=0,l=_data[name].length; i<l; i++){
            deps.concat(dependencies.get(_data[name][i]));
          }
        }
        return deps;
      }
    };
  })();

  /**
   * 修复模块 ID 缩略名为模块地址。
   * @param {String} id, 模块 ID。
   * @return {String} 模块地址。
   */
  function fixUri(id){
    if(util.endsWith(id, ext_js, "i") ||
        util.endsWith(id, ext_css, "i") ||
        util.endsWith(id, ext_json, "i")){
      return id;
    }else{
      return defaultOptions.base_js + id + ".js";
    }
  }

  /**
   * 构建回调函数参数上下文，方便回调函数使用。
   * 回调函数的每个参数对应其需要指定加载的模块。
   * @param {Array} ids, 需要的模块 ID 列表。
   * @return {Array} 各个 ID 对应的模块对象。
   */
  function make_context(ids){
    var ctx = [];
    for(var i=0,l=ids.length; i<l; i++){
      ctx[i] = loaded_module[defaultOptions.mode+":"+ids[i]];
    }
    return ctx;
  }
  /**
   * 将需要的模块添加到加载队列。
   * @param {Array} ids, 模块的 id 名称。
   * @param {Function} callback, 可选，模块加载完成后的回调函数。
   * @return null;
   */
  function reqire_push_queue(ids, callback){
    if(util.isString(ids)){ids = [ids];}
    for(var i=0,id,l=ids.length; i<l; i++){
      ids[i] = id = fixUri(ids[i]);
      if(!loaded_module.hasOwnProperty(defaultOptions.mode+":"+id) &&
          id !== loading_module &&
          !_load_queue.hasOwnProperty(id)){
        load_queue.push(id);
        _load_queue[id] = id;
      }
    }
    if(util.isFunction(callback)){
      callbacks.push(function(){
        return callback.apply(null, make_context(ids));
      });
    }
  }
  // 循环加载队列中的模块。
  // XXX: 目前无法在模块内部获取当前文件名，
  //      只能通过队列链式逐个加载模块，模块加载过程中，
  //      使用变量进行存储传递模块名。
  function _require(){
    if(load_queue.length===0){
      loading_module = null;
      for(var i=defines.length-1; i>=0; i--){
        defines[i].factory();
      }
      defines = [];
      for(var i=0,l=callbacks.length; i<l; i++){
        callbacks[i]();
      }
      callbacks = [];
      return {debug:1};
    };
    var id = load_queue.shift();
    _load_queue[id] = null;
    delete _load_queue[id];

    loading_module = id;
    if(util.endsWith(id, ext_json, "i")){
      return _requireJSON(id);
    }else if(defaultOptions.mode === "background"){
      return _requireOnBackground(id);
    }else{
      return _requireOnContentScript(id);
    }
  }
  function _requireJSON(id){
    if("contentscript"===defaultOptions.mode && !/^https?:\/\//i.test(id)){
      return _requireOnContentScript(id);
    }
    util.request(id, function(text){
      try{
        text = text.replace(/^\s*\/\/\!(.*)$/gm, "$1");
        text = text.replace(/^\s*\/\/.*$/gm, "");
        var json = JSON.parse(text);
      }catch(ex){
        debugLog("Parse JSON Error: ", ex, "at", id);
      }
      loaded_module[defaultOptions.mode+":"+id] = json;

      return _require();
    });
  }
  function _requireOnBackground(id){
    var script = document.createElement("script");
    script.setAttribute("src", id);
    script.setAttribute("charset", "utf-8");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("language", "javascript");
    script.onload = function(){
      return _require();
    };
    (document.body || document.head || document.documentElement).appendChild(script);
  }
  function _requireOnContentScript(id){
    chrome.extension.sendRequest(
      {type: "require", module: id},
      function(response){
        // 非 JavaScript 模块不使用 define 进行定义，
        // 不会被 define 进行缓存，这里直接做缓存处理。
        if(util.endsWith(id, ext_js, "i")){
          // define().
        }else if(util.endsWith(id, ext_json, "i")){
          loaded_module[defaultOptions.mode+":"+id] = response;
        }else if(util.endsWith(id, ext_css, "i")){
          loaded_module[defaultOptions.mode+":"+id] = "css: "+id;
        }else{
          loaded_module[defaultOptions.mode+":"+id] = "module: "+id;
        }
        return _require();
      }
    );
  }
  /**
   * @public 公开的 require 接口。
   * @param {Array,String} ids, 指定的模块列表。
   * @return {Object} 可以返回由 define 定义的任意的对象。
   */
  function require(ids, callback){
    // 直接返回单个被引用的对象，提供给内部 require 使用。
    if(util.isString(ids) && util.isUndefined(callback)){
      var id = fixUri(ids);
      if(loaded_module.hasOwnProperty(defaultOptions.mode+":"+id)){
        return loaded_module[defaultOptions.mode+":"+id];
      }
    }
    reqire_push_queue(ids, callback);
    // 如果没有正在加载模块，启动加载。
    if(!loading_module){
      return _require();
    }
  }

  /**
   * @public 公开的定义模块接口。
   * @param {Object} factory, 模块定义函数或对象。
   * @return null
   */
  function define(factory){
    var id = loading_module;
    var module = {
      require: require,
      exports: {}
    };
    var deps = []; // 当前模块的依赖列表。
    function _define(){
      var fac = factory.call(this, module.require, module.exports, module);
      if(!fac){
        fac = module.exports;
      }
      loaded_module[defaultOptions.mode+":"+id] = fac;
      return fac;
    }
    if(util.isFunction(factory)){
      var re_require = /\brequire\s*\(\s*(["'])([^\1]+?)\1\s*\)/g;
      var matchs = factory.toString().match(re_require);
      if(matchs){
        for(var i=0,l=matchs.length; i<l; i++){
          deps[i] = matchs[i].replace(re_require, '$2');
        }
        dependencies.add(id, deps);
        defines.push({id:id, factory:_define});
        debugLog("before defines:", defines);
        defines = defines.sort(function(a,b){
          var deps = dependencies.get(a);
          debugLog("deps:", deps);
          for(var i=0,l=deps.length; i<l; i++){
            if(deps[i] === b.id){
              return 1;
            }
          }
          return -1;
        });
        debugLog("after defines:", defines);
        require(deps);
      }else{
        dependencies.add(id, []);
        _define();
        //fac = factory.call(this, module.require, module.exports, module);
      }
    }else{
      dependencies.add(id, []);
      loaded_module[defaultOptions.mode+":"+id] = factory;
    }
  }

  win.require = require;
  win.define = define;

  return {
    // ChrommonJS 的公开设置接口。
    config: function(options){
      for(var k in defaultOptions){
        if(options.hasOwnProperty(k)){
          defaultOptions[k] = options[k];
        }
      }
    }
  };
})(window, {
  startsWith: function(str, prefix){
    return str.indexOf(prefix)===0;
  },
  /**
   * @param {String} str, 目标字符串。
   * @param {String} postfix, 后缀。
   * @param {Boolean} ignoreCase, 忽略大小写。
   */
  endsWith: function(str, postfix, ignoreCase){
    if(ignoreCase){
      str = str.toLowerCase();
      postfix = postfix.toLowerCase();
    }
    var idx = str.lastIndexOf(postfix);
    if(idx === -1){return false;}
    return idx===(str.length - postfix.length);
  },
  request: function(uri, callback){
    var ME = this;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        var text = xhr.responseText;
        if(200==xhr.status){
          callback(text);
        }else if(301==xhr.status || 302==xhr.status){
          // Chrome Extension v2 can not user callee.
          ME.request(xhr.getHeader("Location"), callback);
        }else{
          callback(xhr, xhr.status);
        }
      }
    };
    xhr.send();
  },
  isString: function(obj){
    return "string"===typeof obj || obj instanceof String;
  },
  isFunction: function(obj){
    return "function"===typeof obj || obj instanceof Function;
  },
  isUndefined: function(obj){
    return "undefined"===typeof obj;
  }
});
