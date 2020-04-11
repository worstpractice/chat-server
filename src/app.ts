import http from "http";
import os from "os";
import process from "process";
import WebSocket from "ws";
import { handleHTTPClose } from "./listeners/http/close.js";
import { handleHTTPConnection } from "./listeners/http/connection.js";
import { handleHTTPError } from "./listeners/http/error.js";
import { handleHTTPListening } from "./listeners/http/listening.js";
import { handleUncaughtException } from "./listeners/process/exception.js";
import { handleUnhandledRejection } from "./listeners/process/rejection.js";
import { handleSignal } from "./listeners/process/signal.js";
import { handleWebSocketClose } from "./listeners/websocket/close.js";
import { handleWebSocketConnection } from "./listeners/websocket/connection.js";
import { handleWebSocketError } from "./listeners/websocket/error.js";
import { handleWebSocketHeaders } from "./listeners/websocket/headers.js";
import { handleWebSocketListening } from "./listeners/websocket/listening.js";
import { say } from "./terminal/say.js";
import { displayBanner } from "./utils/banner.js";

const PRIORITY = os.constants.priority.PRIORITY_HIGHEST;
const PORT = 443;

displayBanner();

// Node /////////////////////////////////////////////////
say(`Initializing process...`);
os.setPriority(PRIORITY);
process.on(`SIGINT`, handleSignal);
process.on(`SIGTERM`, handleSignal);
process.on(`uncaughtException`, handleUncaughtException);
process.on(`unhandledRejection`, handleUnhandledRejection);

// HTTP /////////////////////////////////////////////////
say(`Initializing HTTP server...`);
const server = http.createServer();
server.on(`close`, handleHTTPClose.bind(server));
server.on(`connection`, handleHTTPConnection.bind(server));
server.on(`error`, handleHTTPError.bind(server));
server.on(`listening`, handleHTTPListening.bind(server));

// WebSocket ////////////////////////////////////////////
say(`Initializing WebSocket server...`);
const wss = new WebSocket.Server({ server });
wss.on(`close`, handleWebSocketClose.bind(wss));
wss.on(`connection`, handleWebSocketConnection.bind(wss));
wss.on(`error`, handleWebSocketError.bind(wss));
wss.on(`listening`, handleWebSocketListening.bind(wss));
wss.on(`headers`, handleWebSocketHeaders.bind(wss));

server.listen(PORT, () => {
  say(`Open for business on port ${PORT}...`);
});

export { server, wss };
