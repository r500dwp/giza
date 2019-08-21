(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./modules/Nav.js":
/*!************************!*\
  !*** ./modules/Nav.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Nav = function () {\n  function Nav(el) {\n    _classCallCheck(this, Nav);\n\n    this.el = el;\n    this.init();\n  }\n\n  _createClass(Nav, [{\n    key: \"init\",\n    value: function init() {\n      this.dom = this.cacheDom();\n      this.addEventListeners();\n    }\n  }, {\n    key: \"cacheDom\",\n    value: function cacheDom() {\n      return {\n        menuParent: this.el.querySelectorAll(\".is-dropdown-button, .is-accordion-button\")\n      };\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      for (var i = 0, len = this.dom.menuParent.length; i < len; i++) {\n        this.dom.menuParent[i].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          _this.handleParentClick(e);\n        });\n      }\n    }\n  }, {\n    key: \"handleParentClick\",\n    value: function handleParentClick(e) {\n      var getClosest = function getClosest(elem, selector) {\n        for (; elem && elem !== document; elem = elem.parentNode) {\n          if (elem.matches(selector)) return elem;\n        }\n        return null;\n      };\n\n      var clickedParent = getClosest(e.target, \".nav__item\");\n      console.log(clickedParent);\n\n      if (clickedParent.classList.contains(\"is-active\")) {\n        clickedParent.classList.remove(\"is-active\");\n        return;\n      }\n\n      var items = clickedParent.parentNode.querySelectorAll(\".nav__item\");\n\n      for (var i = 0, len = items.length; i < len; i++) {\n        items[i].classList.remove(\"is-active\");\n      }\n\n      clickedParent.classList.add(\"is-active\");\n    }\n  }]);\n\n  return Nav;\n}();\n\nexports.default = Nav;\n\n//# sourceURL=webpack:///./modules/Nav.js?");

/***/ })

}]);