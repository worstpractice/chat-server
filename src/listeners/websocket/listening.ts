import WebSocket from "ws";
import { yay } from "../../utils/yay.js";

function handleWebSocketListening(this: WebSocket.Server): void {
  yay(`WebSocket server is now listening!`);
}

export { handleWebSocketListening };
