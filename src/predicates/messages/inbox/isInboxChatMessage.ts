import { Inbox } from "../../../typings/declarations";

const isInboxChatMessage = (message: Inbox.Message): message is Inbox.ChatMessage => {
  return `UUID` in message;
};

export { isInboxChatMessage };
