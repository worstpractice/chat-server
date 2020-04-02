import WebSocket from "ws";
import { broadcastToAllClients } from "../../../messages/broadcastToAllClients.js";
import { acceptUsername } from "../../../messages/username.js";
import { deserialize } from "../../../utils/deserialize.js";
import { say } from "../../../utils/say.js";
import { serialize } from "../../../utils/serialize.js";
import { isInboxChatMessage, isInboxUsername } from "../../../utils/typePredicates.js";
import { yay } from "../../../utils/yay.js";

function handleClientMessage(this: WebSocket, data: WebSocket.Data): void {
  yay(`Client message recieved!`);
  say(`Data: ${data}`);
  const message = deserialize(data);
  if (isInboxUsername(message)) {
    return this.send(serialize(acceptUsername));
  }
  if (isInboxChatMessage(message)) {
    return broadcastToAllClients(message);
  }
}
export { handleClientMessage };
