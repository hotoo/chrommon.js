/**
 * @overview
 *
 * @author 闲耘™ (hotoo.cn[AT]gmail.com)
 * @version 2011/11/02
 */

chrommon.config({
  mode: "background"
});

require(["manifest.json", "options"], function(manifest, Options){

  var DEBUG = true;
  var extension_version = manifest.version;

  /**
   * @param {Array} modules.
   * @param {Function} callback.
   * @param {Object} loaded.
   */
  function contentscript_require(module, callback){
    var re_js = /\.js$/i;
    var re_css = /\.css$/i;
    var re_json = /\.json$/i;
    var allFrames = false;
    chrome.tabs.getSelected(null, function(tab){
      if(re_js.test(module)){
        chrome.tabs.executeScript(tab.id,
          {file: module, allFrames:allFrames},
          function(){
            if("function"===typeof callback){
              callback();
            }
          }
        );
      }else if(re_json.test(module)){
        if("manifest.json"===module){
          return callback(manifest);
        }else{
          request(module, callback);
        }
      }else if(re_css.test(module)){
        chrome.tabs.insertCSS(tab.id,
          {file: module, allFrames:allFrames},
          function(){
            if("function"===typeof callback){
              callback();
            }
          }
        );
      }
    });
  }
  chrome.extension.onRequest.addListener(
      function(request, sender, sendResponse){
        switch(request.type){
          case 'init':
            // show icon in location bar.
            chrome.pageAction.show(sender.tab.id);
            //sendResponse({});
            break;
          case "get-options":
            sendResponse({options: localStorage});
            break;
          case 'updateOptions':
            updateOptions();
            break;
          case 'require':
            contentscript_require(request.module, function(response){
              sendResponse(response);
            });
            break;
          //case 'manifest.json':
            //sendResponse(manifest);
            //break;
          case 'close':
            break;
          default:
            break;
        }
      }
  );

  // 用户点击网站分析插件在浏览器地址栏右侧的图标。
  chrome.pageAction.onClicked.addListener(function(tab){
    chrome.tabs.sendRequest(tab.id, {type: "open"}, function(response){});
  });

  var defaultOptions = {
    "general.smart-startup": "0",
    "general.numbers-commfy": "3",
    "general.keep-alive": "1",
    "general.export-separator": ","
  };
  // init default options.
  Options.init(extension_version, defaultOptions);

});
