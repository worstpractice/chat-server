import http from "http";
import WebSocket from "ws";
import { say } from "../../utils/say.js"

function handleWebSocketHeaders(this: WebSocket.Server, headers: string[], _request: http.IncomingMessage): void {
  say(`WebSocket server recieved headers!`);
  for (let header of headers) {
    console.log(` ${header}`);
  }
  console.log("");
}

export { handleWebSocketHeaders };
