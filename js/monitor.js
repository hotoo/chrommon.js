/**
 * @overview
 *
 * @author 闲耘™ (hotoo.cn[AT]gmail.com)
 * @version 2013/02/10
 */

// TODO: unfinished.
define(function(require, exports, module){
  function errorLogger(message, file, line){
    var msg = (DEBUG?DEBUG_PREFIX:"")+file+"#"+line+":"+message;
    _gaq.push(['_trackEvent', msg, 'errors', EXTENSION_VERSION]);
  }
  window.onerror = function(message, file, line){
    errorLogger.apply(window, arguments);
  };
  var monitor = {
    error: function(e){
      errorLogger(e.message||"", e.fileName||"", e.lineNumber||e.line||0);
    }
  }
});
