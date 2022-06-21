"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.send = void 0;
//web_app.ts
var ws_1 = __importDefault(require("ws"));
//Initiate WebSocket connection
//indicates that the connection is ready to send and receive data
function onOpen(event) {
    console.log("connected");
}
//An event listener to be called when a message is received from the server
function onMessage(event) {
    var data = JSON.parse(event.data);
    console.log("message: ", data);
}
//An event listener to be called when an error occurs. This is a simple event named "error".
function onError(event) {
    console.log(JSON.stringify(event.data));
}
//An event listener to be called when the WebSocket connection's readyState changes to CLOSED.
function onClose(event) {
    console.log("closed");
    console.log("event: ", JSON.stringify(event.data));
    console.log("event.data: ", JSON.stringify(event.data));
}
debugger;
var ws = new ws_1.default('ws://localhost:9999');
ws.onopen = onOpen;
ws.onmessage = onMessage;
ws.onerror = onError;
ws.onclose = onClose;
var send = function (e) {
    console.log(e);
};
exports.send = send;
var close = function () {
    console.log("hihihihihi");
};
exports.close = close;
