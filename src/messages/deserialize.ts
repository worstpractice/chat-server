import WebSocket from "ws";
import { nay } from "../terminal/nay.js";
import { rethrow } from "../utils/rethrow.js";

const deserialize = (data: WebSocket.Data): Inbox.Message | never => {
  let deserialized;
  try {
    deserialized = JSON.parse(data.toString());
  } catch (error) {
    error instanceof SyntaxError ? nay(`Deserialization failed!`) : rethrow(error);
  } finally {
    return deserialized as Inbox.Message;
  }
};

export { deserialize };
