
chrommon.config({
  mode: "contentscript"
});

require(["manifest.json", "options"], function(manifest, Options){
  var win = window,
    doc = win.document,
    loc = doc.location;

  var DEBUG = loc.hash==="#debug" || false;
  var DEBUG_PREFIX = "debug-";

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
          alert("Open")
          break;
        default:
          break;
      }
    }
  });
});
