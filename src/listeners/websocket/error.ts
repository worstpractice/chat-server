import WebSocket from "ws";
import { nay } from "../../terminal/nay.js";
import { say } from "../../terminal/say.js";

function handleWebSocketError(this: WebSocket.Server, error: Error): void {
  nay(`WebSocket server ran into trouble!`);
  say(`Error: ${error}`);
}

export { handleWebSocketError };
