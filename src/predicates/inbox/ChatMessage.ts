const isInboxChatMessage = (message: Inbox.Message): message is Inbox.ChatMessage => {
  return `text` in message && !(`UUID` in message);
};

export { isInboxChatMessage };

