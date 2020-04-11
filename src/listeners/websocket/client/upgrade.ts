import http from "http";
import WebSocket from "ws";
import { say } from "../../../terminal/say.js";

function handleClientUpgrade(this: WebSocket, _request: http.IncomingMessage): void {
  say(`Client upgrade request recieved!`);
}

export { handleClientUpgrade };
