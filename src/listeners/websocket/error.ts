import WebSocket from "ws";
import { nay } from "../../utils/nay.js";
import { say } from "../../utils/say.js"

function handleWebSocketError(this: WebSocket.Server, error: Error): void {
  nay(`WebSocket server ran into trouble!`);
  say(`Error: ${error}`);
}

export { handleWebSocketError };
