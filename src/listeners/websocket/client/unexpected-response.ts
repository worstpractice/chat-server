import http from "http";
import WebSocket from "ws";
import { nay } from "../../../utils/nay.js";

function handleClientUnexpectedResponse(this: WebSocket, _request: http.ClientRequest, _response: http.IncomingMessage): void {
  nay(`Client recieved an unexpected response!`);
}

export { handleClientUnexpectedResponse };
