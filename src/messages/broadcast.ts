import { randomBytes } from "crypto";
import { wss } from "../app.js";
import { say } from "../utils/say.js";
import { yay } from "../utils/yay.js";
import { serialize } from "./serialize.js";
import { stamp } from "./stamp.js";

const broadcast = (message: Inbox.ChatMessage): void => {
  randomBytes(8, (error: Error | null, buffer: Buffer): void => {
    if (error) {
      throw error;
    } else if (buffer) {
      const outMessage: Outbox.ChatMessage = stamp(message, buffer);
      const serialized: string = serialize(outMessage);
      for (let client of wss.clients) {
        client.send(serialized);
      }
      yay(`Broadcasting client message...`);
      say(`Data: ${serialized}`);
    }
  });
};

export { broadcast };
