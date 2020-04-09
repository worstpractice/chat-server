const isOutboxUsername = (message: Outbox.Message): message is Outbox.Username => {
  return `isUsernameAccepted` in message;
};

export { isOutboxUsername };
