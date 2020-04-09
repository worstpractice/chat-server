const isOutboxChatMessage = (message: Outbox.Message): message is Outbox.ChatMessage => {
  return `UUID` in message;
};

export { isOutboxChatMessage };
