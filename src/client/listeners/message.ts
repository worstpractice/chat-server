import { Application } from "../../components/Application";
import { isInboxChatMessage } from "../../predicates/messages/inbox/isInboxChatMessage";
import { isInboxUsername } from "../../predicates/messages/inbox/isInboxUsername";
import { Inbox } from "../../typings/declarations";
import { count, log } from "../../utils/console";
import { nay } from "../../utils/nay";
import { deserialize } from "../deserialize";

function handleMessage(this: Application, event: MessageEvent): void {
  count(`client: handleMessage`);
  const message: Inbox.Message = deserialize(event.data);
  log(message);
  if (isInboxChatMessage(message)) {
    return this.handleIncomingChatMessage(message);
  }
  if (isInboxUsername(message)) {
    return this.handleIncomingUsername(message);
  }
  nay(`UH-OH! Unknown message type recieved!`);
  log(message);
}

export { handleMessage };
