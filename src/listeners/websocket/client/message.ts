import WebSocket from "ws";
import { broadcast } from "../../../messages/broadcast.js";
import { deserialize } from "../../../messages/deserialize.js";
import { acceptUsername, rejectUsername } from "../../../messages/response.js";
import { serialize } from "../../../messages/serialize.js";
import { isInboxChatMessage } from "../../../predicates/inbox/ChatMessage.js";
import { isInboxUsername } from "../../../predicates/inbox/Username.js";
import { nay } from "../../../utils/nay.js";
import { yay } from "../../../utils/yay.js";
import { hasValidUsername } from "./metadata/hasValidUsername.js";
import { takenUsernames } from "./metadata/takenUsernames.js";

function handleClientMessage(this: WebSocket, data: WebSocket.Data): void {
  yay(`Client message recieved!`);
  const message = deserialize(data);

  if (isInboxUsername(message)) {
    if (takenUsernames.has(message.username)) {
      nay(`Username ${message.username} rejected!`);
      hasValidUsername.delete(this);
      return this.send(serialize(rejectUsername));
    }
    yay(`Username ${message.username} accepted!`);
    hasValidUsername.add(this);
    takenUsernames.add(message.username);
    return this.send(serialize(acceptUsername));
  }

  if (isInboxChatMessage(message)) {
    return broadcast(message);
  }
}

export { handleClientMessage };
