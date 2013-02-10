/**
 * @overview
 *
 * @author 闲耘™ (hotoo.cn[AT]gmail.com)
 * @version 2013/02/10
 */

define(function(require, exports, module){
  var options_prefix = "options.";
  var supportLocalStorage = ("undefined" !== localStorage);

  var Options = {
    init: function(version, options){
      if(!supportLocalStorage){return false;}
      var options_version_name = options_prefix + "version";
      // 如果已经初始化，退出。
      if(version === localStorage[options_version_name]){return true;}

      for(var name in options){
        // 如果该选项已经设置，则继承使用用户的设置。
        if(localStorage.hasOwnProperty(options_prefix+name)){continue;}
        localStorage[options_prefix+name] = options[name];
      }
      localStorage[options_version_name] = version;
      return true;
    },
    get: function(name){
      if(!supportLocalStorage){return null;}
      return localStorage[options_prefix + name] || null;
    },
    set: function(name, value){
      if(!supportLocalStorage ||
          !localStorage.hasOwnProperty(name)){
        return false;
      }
      localStorage[options_prefix + name] = value;
    },
    clear: function(){
      if(!supportLocalStorage){return false;}
      localStorage.clear();
    }
  };

  module.exports = Options;
});
