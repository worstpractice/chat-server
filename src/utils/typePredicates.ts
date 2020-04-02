
const isInboxChatMessage = (message: Inbox.Message): message is Inbox.ChatMessage => {
  return `text` in message && !(`UUID` in message);
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

const isError = (suspect: unknown): suspect is Error => {
  return Object.is(suspect, Error);
};

const isErrorKind = (suspect: unknown): suspect is InstanceType<typeof Error> => {
  return Object.is(Object.getPrototypeOf(suspect), Error);
};

export { isInboxChatMessage, isInboxUsername, isOutboxChatMessage, isOutboxUsername, isErrorKind, isError };
