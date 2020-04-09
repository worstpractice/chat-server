const isInboxUsername = (message: Inbox.Message): message is Inbox.Username => {
  return `username` in message;
};

export { isInboxUsername };

