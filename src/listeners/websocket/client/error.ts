import WebSocket from "ws";
import { nay } from "../../../terminal/nay.js";

function handleClientError(this: WebSocket, error: Error): void {
  nay(`Client ran into trouble!`, error);
}

export { handleClientError };
