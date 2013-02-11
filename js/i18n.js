/**
 * @overview
 *
 * @author 闲耘™ (hotoo.cn[AT]gmail.com)
 * @version 2013/02/10
 */


define(function(require, exports, module){
  var re_i18n = /__MSG_(.+?)__/g;

  function replace(template){
    if("string"!==typeof template){return "";}
    return template.replace(re_i18n, function($0, $1_msg_name){
      var msg = chrome.i18n.getMessage($1_msg_name);
      if(debug && !msg){alert($1_msg_name+" message not exists.")}
      return msg;
    });
  }
  function get(key){
    return chrome.i18n.getMessage(key);
  }

  module.exports = {
    replace: replace,
    get: get
  };
});
