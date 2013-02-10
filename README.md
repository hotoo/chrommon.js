
# ChrommonJS

一个 Google Chrome 浏览器的模块加载器。

## 简介

基于这个模块加载器，开发者开发 Chrome 浏览器的插件时使用遵循 CommonJS 规范
的开发方式。

js/module-a.js
```
define(function(require, exports, module){
  require("css/module-a.css");

  var Cls = function(){};
  Cls.prototype.methonA = function(){};

  module.exports = Cls;
});
```

js/module-b.js
```
define(function(require, exports, module){
  var A = require("module-a");
  var a = new A();
  a.methonA();
});
```

js/contentscript.js
```
require(["module-1", "module-2", "module-b", ])
```
