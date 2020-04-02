import { randomBytes } from "crypto";
import { wss } from "../app.js";
import { say } from "../utils/say.js";
import { serialize } from "../utils/serialize.js";
import { yay } from "../utils/yay.js";
import { stampChatMessage } from "./stampChatMessage.js";

const broadcastToAllClients = (message: Inbox.ChatMessage): void => {
  randomBytes(8, (error: Error | null, buffer: Buffer): void => {
    if (error) {
      throw error;
    } else if (buffer) {
      const outmessage = stampChatMessage(message, buffer);
      const serialized = serialize(outmessage);
      for (let client of wss.clients) {
        client.send(serialized);
      }
      yay(`Broadcasting client message...`);
      say(`Data: ${serialized}`);
    }
  });
};

export { broadcastToAllClients };
