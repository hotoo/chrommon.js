/**
 * @overview
 *
 * @author 闲耘™ (hotoo.cn[AT]gmail.com)
 * @version 2013/02/05
 */

define(function(require, exports, module){
  var AJAX = {
    send: function AJAX(options){
      var options = clone({
        type: "GET",
      uri: "",
      data: "",
      success: function(){},
      failure: function(){}
      }, options);
      options.type = (/^post$/i.test(options.type)? "POST":"GET");

      var xhr = new XMLHttpRequest();
      var uri = options.uri;
      if("GET"==options.type){uri += "?"+options.data;}
      xhr.open(options.type, uri, true);
      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          var text = xhr.responseText;
          if(xhr.status == 200){
            options.success(text);
          }else{
            options.failure(text, xhr.status);
          }
        }
      };
      if("POST" == options.type){
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(options.data);
      }else{
        xhr.send();
      }
    },
    get: function(options){
      options.type = "GET";
      AJAX.send(options);
    },
    post: function(options){
      options.type = "POST";
      AJAX.send(options);
    }
  };

  module.exports = AJAX;
});
