/**
 * @overview
 *
 * @author 闲耘™ (hotoo.cn[AT]gmail.com)
 * @version 2013/02/10
 */

define(function(require, exports, module){
  var i18n = require("i18n");
  var request = require("request");

  /**
   * 加载模板。
   * @param {String} path, required, template file path.
   * @param {Function} callback(templateCode, err);
   */
  function loadTemplate(path, callback){
    request.get({
      uri: path,
      data: "",
      success: function(text){
        return callback(text);
      },
      failure: function(text, code){
        return callback("", {
          message: "Load template error.",
        code: code
        });
      }
    });
  }

  exports.load = loadTemplate;
});
