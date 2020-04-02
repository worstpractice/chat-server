const stampChatMessage = (message: Inbox.ChatMessage, buffer: Buffer): Outbox.ChatMessage => {
  const UUID = buffer.toString("hex");
  return { ...message, UUID };
};

export { stampChatMessage };
