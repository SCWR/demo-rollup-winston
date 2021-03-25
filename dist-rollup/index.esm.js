import winston from 'winston';

class CustomConsole extends winston.transports.Console {
}
const friendConsole = new CustomConsole();
console.log('friendConsole: ', friendConsole);

export { CustomConsole };
//# sourceMappingURL=index.esm.js.map
