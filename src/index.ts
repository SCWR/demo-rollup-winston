import winston from 'winston';

export class CustomConsole extends winston.transports.Console {}

const friendConsole = new CustomConsole();

console.log('friendConsole: ', friendConsole);
