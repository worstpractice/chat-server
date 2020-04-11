import WebSocket from "ws";
import { say } from "../../terminal/say.js";

function handleWebSocketClose(this: WebSocket.Server): void {
  say(`WebSocket server is now closed!`);
}

export { handleWebSocketClose };
