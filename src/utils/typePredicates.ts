const isInboxChatMessage = (message: Inbox.Message): message is Inbox.ChatMessage => {
  return `text` in message;
};

const isInboxUsername = (message: Inbox.Message): message is Inbox.Username => {
  return `username` in message;
};

const isOutboxChatMessage = (message: Outbox.Message): message is Outbox.ChatMessage => {
  return `UUID` in message;
};

const isOutboxUsername = (message: Outbox.Message): message is Outbox.Username => {
  return `isUsernameAccepted` in message;
};

export { isInboxChatMessage, isInboxUsername, isOutboxChatMessage, isOutboxUsername };
