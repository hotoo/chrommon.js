
# ChrommonJS

一个 Google Chrome Extension 的模块加载器。

## 简介

基于这个模块加载器，开发者开发 Chrome 浏览器的插件时，可以使用遵循
CommonJS 规范的模块化开发方式，更好的组织代码，自动管理依赖。

ChrommonJS 目前支持 JavaScript, CSS, JSON 的加载。

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
  // 同步加载。
  var A = require("module-a");
  var a = new A();
  a.methonA();

  exports.methonB = function(){};
});
```

js/contentscript.js
```
// 异步加载方式。页内入口函数只能通过异步方式加载。
require(["module-1", "module-2", "module-b"],
    function(module1, module2, moduleB){

  moduleB.methonB();
});
```
