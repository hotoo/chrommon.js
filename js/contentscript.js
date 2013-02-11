
chrommon.config({
  mode: "contentscript"
});

require(["manifest.json", "options", "i18n"], function(manifest, Options, i18n){

  var win = window,
    doc = win.document,
    loc = doc.location;

  var debug = loc.hash==="#debug" || manifest.debug || false;
  var DEBUG_PREFIX = "debug-";

  chrommon.config({
    debug: debug
  });

  var EXTENSION_VERSION = manifest.version;

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-10258428-4']);
  _gaq.push(['_trackPageview']);
  require("ga");

  // init extension contentscript.
  chrome.extension.sendRequest({type: "init"}, function(){});

  chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
    if(request.hasOwnProperty("type")){
      switch(request.type){
        case 'open':
          alert(i18n.get("open"));
          break;
        default:
          break;
      }
    }
  });
});
