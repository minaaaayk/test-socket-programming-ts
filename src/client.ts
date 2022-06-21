//web_app.ts
import WebSocket from "ws";
//Initiate WebSocket connection
//indicates that the connection is ready to send and receive data

function onOpen(event: any): void {
    console.log("connected");

}
//An event listener to be called when a message is received from the server

function onMessage(event: any): void {
    const data = JSON.parse(event.data);
    console.log("message: ", data);
    
}
//An event listener to be called when an error occurs. This is a simple event named "error".

function onError(event: any): void {
    console.log(JSON.stringify(event.data));
}
//An event listener to be called when the WebSocket connection's readyState changes to CLOSED.

function onClose(event: any): void {
    
    console.log("closed");
    console.log("event: ", JSON.stringify(event.data));
    console.log("event.data: ", JSON.stringify(event.data));
}
debugger;
const ws = new WebSocket('ws://localhost:9999'); 
ws.onopen = onOpen;
ws.onmessage = onMessage;
ws.onerror = onError;
ws.onclose = onClose;



export const send = (e: any) => {
    console.log(e);
}

export const close = () => {
    console.log("hihihihihi");
}