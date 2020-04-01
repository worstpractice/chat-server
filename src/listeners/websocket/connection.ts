import * as crypto from "crypto";
import http from "http";
import WebSocket from "ws";
import { wss } from "../../index.js";
import { nay } from "../../utils/nay.js";
import { say } from "../../utils/say.js";
import { yay } from "../../utils/yay.js";

import { acceptUsernameMessage, rejectUsernameMessage } from "./messages/username.js";
import { rethrow } from "../../utils/rethrow.js";

function handleWebSocketConnection(this: WebSocket.Server, ws: WebSocket): void {
  yay(`New client connected!`);
  say(`Current server population: ${wss.clients.size}`);

  ws.on(`open`, function onClientOpen(this: WebSocket): void {
    yay(`Client opened!`);
  });

  ws.on(`message`, function onClientMessage(this: WebSocket, data: WebSocket.Data): void {
    yay(`Client message recieved!`);
    say(`Data: ${data}`);
    let serializedMessage: string;
    let deserializedMessage: any;

    try {
      deserializedMessage = JSON.parse(data.toString());
    } catch (error) {
      error instanceof SyntaxError ? nay(`Deserialization failed!`) : rethrow(error);
    }

    if ("username" in deserializedMessage) {
      say(`Message is a username request...`);
      for (let client of wss.clients) {
        if (Object.is(ws, client)) {
          yay(`Username accepted!`);
          return ws.send(JSON.stringify(acceptUsernameMessage)); // This doesn't really compare for taken usernames, just if the client is a client -- which will always be the case.
        }
      }
      nay(`WebSocket was not in the list of clients! How can this BE?!`); // Your outrage is justified. This can never happen.
      return ws.send(JSON.stringify(rejectUsernameMessage)); // As such, this naming decision doesn't even belong here.
    }

    crypto.randomBytes(8, function generateUserUUID(error, buffer) {
      if (error) throw error;
      if (buffer) {
        deserializedMessage.UUID = buffer.toString("hex");
        try {
          serializedMessage = JSON.stringify(deserializedMessage);
        } catch (error) {
          error instanceof SyntaxError ? nay(`Serialization failed!`) : rethrow(error);
        }
        for (let client of wss.clients) {
          client.send(serializedMessage);
        }
      }
      yay(`Broadcasting client message...`);
      say(`Data: ${serializedMessage}`);
    });
  });

  ws.on(`close`, function onClientClose(this: WebSocket, code: number, reason: string): void {
    say(`Client disconnected!`);
    say(`Code: ${code}`);
    say(`Reason: ${reason}`);
    say(`Current server population: ${wss.clients.size}`);
  });

  ws.on(`error`, function onClientError(this: WebSocket, error: Error): void {
    nay(`Client ran into trouble!`, error);
  });

  ws.on(`ping`, function onClientPing(this: WebSocket, data: Buffer): void {
    say(`Client ping recieved!`, data);
  });

  ws.on(`pong`, function onClientPong(this: WebSocket, data: Buffer): void {
    say(`Client pong recieved!`, data);
  });

  ws.on(`unexpected-response`, function onClientUnexpectedResponse(this: WebSocket, _request: http.ClientRequest, _response: http.IncomingMessage): void {
    nay(`Client recieved an unexpected response!`);
  });

  ws.on(`upgrade`, function onClientUpgrade(this: WebSocket, _request: http.IncomingMessage): void {
    say(`Client upgrade request recieved!`);
  });
}

export { handleWebSocketConnection };
