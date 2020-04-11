import { log } from "console";
import http from "http";
import WebSocket from "ws";
import { say } from "../../terminal/say.js";

function handleWebSocketHeaders(this: WebSocket.Server, headers: string[], _request: http.IncomingMessage): void {
  say(`WebSocket server recieved headers!`);
  for (let header of headers) {
    log(` ${header}`);
  }
  log("");
}

export { handleWebSocketHeaders };
