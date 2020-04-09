import { Outbox } from "../../../typings/declarations";

const isOutboxUsername = (message: Outbox.Message): message is Outbox.Username => {
  return `username` in message;
};

export { isOutboxUsername };

