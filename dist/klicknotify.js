(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Klicknotify = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(global,factory){if(typeof define==="function"&&define.amd){define(["exports"],factory)}else if(typeof exports!=="undefined"){factory(exports)}else{var mod={exports:{}};factory(mod.exports);global.metapod=mod.exports}})(this,function(exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _appenders;function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var tag={};var APPENDER_PREFIX="appender";var tagNames=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","i","iframe","img","input","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","rtc","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];var propertiesAppenders=_defineProperty({events:function events(element,property,_events){Object.keys(_events).forEach(function(eventName){element.addEventListener(eventName,_events[eventName])})},className:function className(element,property,value){value=value.constructor.name==="String"?value.split(" "):value;value.forEach(function(className){element.classList.add(className)})},style:function style(element,property,styles){Object.keys(styles).forEach(function(prop){element.style[prop]=styles[prop]})}},APPENDER_PREFIX+"Default",function undefined(element,property,value){element.setAttribute(property,value)});var appenders=(_appenders={},_defineProperty(_appenders,APPENDER_PREFIX+"Object",function undefined(element,arg){var propertyType=void 0;Object.keys(arg).forEach(function(value){propertyType=typeof propertiesAppenders[value]==="function"?value:APPENDER_PREFIX+"Default";propertiesAppenders[propertyType](element,value,arg[value])})}),_defineProperty(_appenders,APPENDER_PREFIX+"String",function undefined(element,arg){element.appendChild(document.createTextNode(arg))}),_defineProperty(_appenders,APPENDER_PREFIX+"Function",function undefined(element,arg){element.appendChild(arg())}),_defineProperty(_appenders,APPENDER_PREFIX+"Array",function undefined(element,arg){arg.forEach(function(value){element.appendChild(value)})}),_defineProperty(_appenders,APPENDER_PREFIX+"Default",function undefined(element,arg){element.appendChild(arg)}),_appenders);var normalizeArg=function normalizeArg(arg){if(arg.constructor.name==="Number"){return arg.toString()}return arg};var builderElement=function builderElement(name,attrs){var element=document.createElement(name);var appenderName=void 0;Array.prototype.forEach.call(attrs,function(arg){if(arg===undefined||arg===null||!arg.constructor){throw new Error("Invalid object tag was provided. Please, fix your template!")}arg=normalizeArg(arg);appenderName=typeof appenders[APPENDER_PREFIX+arg.constructor.name]==="function"?arg.constructor.name:"Default";appenders[APPENDER_PREFIX+appenderName](element,arg)});return element};tagNames.forEach(function(tagName){tag[tagName]=function(){for(var _len=arguments.length,parameters=Array(_len),_key=0;_key<_len;_key++){parameters[_key]=arguments[_key]}return builderElement(tagName,parameters)}});exports.default=tag});
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MESSAGE_TYPES = exports.MESSAGE_TYPES = ['success', 'error', 'warning'];
var DEFAULT_CONFIG = exports.DEFAULT_CONFIG = {
  autoHide: false,
  autoHideDelay: 3000
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var NOTIFY_CLASS = exports.NOTIFY_CLASS = 'klick-notify';
var MESSAGE_CLASS = exports.MESSAGE_CLASS = 'klick-notify-message';
var CLOSE_CLASS = exports.CLOSE_CLASS = 'klick-notify-close';
var IS_VISIBLE_CLASS = exports.IS_VISIBLE_CLASS = 'is-visible';
var CONTAINER_CLASS = exports.CONTAINER_CLASS = 'klick-notify-container';

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = require('./config/app');

var AppConfig = _interopRequireWildcard(_app);

var _style = require('./config/style');

var StyleConfig = _interopRequireWildcard(_style);

var _main = require('./views/main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CONTAINER = (0, _main2.default)();
var MESSAGE = CONTAINER.querySelector('.' + StyleConfig.MESSAGE_CLASS);
var CLOSE_BUTTON = CONTAINER.querySelector('.' + StyleConfig.CLOSE_CLASS);
var MESSAGE_TYPES = AppConfig.MESSAGE_TYPES,
    DEFAULT_CONFIG = AppConfig.DEFAULT_CONFIG;

var METHODS = {};

var showTimeout = void 0;

var resetTimeouts = function resetTimeouts() {
  if (showTimeout) {
    clearTimeout(showTimeout);
  }
};

var resetStyles = function resetStyles() {
  MESSAGE_TYPES.forEach(function (type) {
    CONTAINER.classList.remove(type);
  });
};

METHODS.close = function () {
  MESSAGE.textContent = '';
  CONTAINER.classList.remove(StyleConfig.IS_VISIBLE_CLASS);
};

METHODS.show = function (options) {
  var currentOptions = Object.assign({}, DEFAULT_CONFIG, options);

  if (!currentOptions.message) {
    throw new Error('Notify: Message is invalid.');
  }

  resetTimeouts();
  resetStyles();

  MESSAGE.textContent = currentOptions.message;

  CONTAINER.classList.add(StyleConfig.IS_VISIBLE_CLASS);

  if (MESSAGE_TYPES.indexOf(currentOptions.type) > -1) {
    CONTAINER.classList.add(currentOptions.type);
  }

  if (currentOptions.autoHide) {
    showTimeout = setTimeout(function () {
      METHODS.close();
    }, currentOptions.autoHideDelay);
  }
};

METHODS.init = function () {
  document.body.appendChild(CONTAINER);

  CLOSE_BUTTON.addEventListener('click', function () {
    METHODS.close();
  });
};

MESSAGE_TYPES.forEach(function (type) {
  METHODS[type] = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    METHODS.show(Object.assign(options, { type: type }));
  };
});

exports.default = METHODS;
module.exports = exports['default'];

},{"./config/app":2,"./config/style":3,"./views/main":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metapod = require('metapod');

var _metapod2 = _interopRequireDefault(_metapod);

var _style = require('../config/style');

var StyleConfig = _interopRequireWildcard(_style);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _metapod2.default.div(_metapod2.default.div(_metapod2.default.span({ className: StyleConfig.MESSAGE_CLASS }), _metapod2.default.a('x', {
    href: '#',
    className: StyleConfig.CLOSE_CLASS
  }), { className: StyleConfig.CONTAINER_CLASS }), { className: StyleConfig.NOTIFY_CLASS });
};

module.exports = exports['default'];

},{"../config/style":3,"metapod":1}]},{},[4])(4)
});