import WebSocket from "ws";
import { wss } from "../../app.js";
import { say } from "../../terminal/say.js";
import { yay } from "../../terminal/yay.js";
import { handleClientClose } from "./client/close.js";
import { handleClientError } from "./client/error.js";
import { handleClientMessage } from "./client/message.js";
import { handleClientOpen } from "./client/open.js";
import { handleClientPing } from "./client/ping.js";
import { handleClientPong } from "./client/pong.js";
import { handleClientUnexpectedResponse } from "./client/unexpected-response.js";
import { handleClientUpgrade } from "./client/upgrade.js";

function handleWebSocketConnection(this: WebSocket.Server, ws: WebSocket): void {
  yay(`New client connected!`);
  ws.on(`close`, handleClientClose.bind(ws));
  ws.on(`error`, handleClientError.bind(ws));
  ws.on(`message`, handleClientMessage.bind(ws));
  ws.on(`open`, handleClientOpen.bind(ws));
  ws.on(`ping`, handleClientPing.bind(ws));
  ws.on(`pong`, handleClientPong.bind(ws));
  ws.on(`unexpected-response`, handleClientUnexpectedResponse.bind(ws));
  ws.on(`upgrade`, handleClientUpgrade.bind(ws));
  say(`Current server population: ${wss.clients.size}`);
}

export { handleWebSocketConnection };
