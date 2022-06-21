"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http = __importStar(require("http"));
var WebSocket = __importStar(require("ws"));
var app = (0, express_1.default)();
// initialize a simple http server
var server = http.createServer(app);
// initialize the WebSocket server instance
var wss = new WebSocket.Server({ server: server });
var timer;
wss.on('connection', function (ws) {
    var counter = 0;
    timer = setInterval(function () {
        if (ws && ws.readyState === WebSocket.OPEN) {
            var value = Math.sin(counter++ * 0.1);
            var data = {
                timestamp: Date.now(),
                value: value
            };
            ws.send(JSON.stringify(data));
        }
        else {
            clearInterval(timer);
        }
    }, 5000); // ~ 256 Hz
    timer = setInterval(function () {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.close();
        }
    }, 5000); // ~ 256 Hz
});
// start our server
server.listen(9999, function () {
    console.log("Server started on port ".concat(server.address().port, " :)"));
});
