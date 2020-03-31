import { Outbox } from "../../../typings/declarations";

const acceptUsernameMessage: Outbox.Username = {
  isUsernameAccepted: true,
};

const rejectUsernameMessage: Outbox.Username = {
  isUsernameAccepted: false,
};

export { acceptUsernameMessage, rejectUsernameMessage };
