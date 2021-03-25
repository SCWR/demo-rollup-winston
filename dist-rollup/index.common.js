'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var winston = require('winston');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var winston__default = /*#__PURE__*/_interopDefaultLegacy(winston);

class CustomConsole extends winston__default['default'].transports.Console {
}
const friendConsole = new CustomConsole();
console.log('friendConsole: ', friendConsole);

exports.CustomConsole = CustomConsole;
//# sourceMappingURL=index.common.js.map
