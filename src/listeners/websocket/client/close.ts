import WebSocket from "ws";
import { wss } from "../../../app.js";
import { say } from "../../../utils/say.js";

function handleClientClose(this: WebSocket, code: number, reason: string): void {
  say(`Client disconnected!`);
  say(`Code: ${code}`);
  say(`Reason: ${reason}`);
  say(`Current server population: ${wss.clients.size}`);
}

export { handleClientClose };
