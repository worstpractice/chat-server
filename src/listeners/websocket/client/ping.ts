import WebSocket from "ws";
import { say } from "../../../utils/say.js";

function handleClientPing(this: WebSocket, data: Buffer): void {
  say(`Client ping recieved!`, data);
}

export { handleClientPing };
