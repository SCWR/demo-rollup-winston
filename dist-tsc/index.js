"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomConsole = void 0;
const winston_1 = __importDefault(require("winston"));
class CustomConsole extends winston_1.default.transports.Console {
}
exports.CustomConsole = CustomConsole;
const friendConsole = new CustomConsole();
console.log('friendConsole: ', friendConsole);
//# sourceMappingURL=index.js.map