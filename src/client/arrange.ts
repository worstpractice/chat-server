import { Application } from "../components/Application";
import { ServerSettings } from "../typings/declarations";
import { count } from "../utils/console";
import { nay } from "../utils/nay";
import { deriveURL } from "./deriveURL";
import { handleClose } from "./listeners/close";
import { handleError } from "./listeners/error";
import { handleMessage } from "./listeners/message";
import { handleOpen } from "./listeners/open";

const serverSettings: ServerSettings = {
  port: 443,
  protocol: `ws://`,
  domain: `localhost`,
};

let debounced = false;

const arrangeWebSocketConnection = (that: Application): WebSocket | null => {
  count(`client: arrangeWebSocketConnection`);
  let ws: WebSocket | null = null;
  if (!debounced) {
    try {
      ws = new WebSocket(deriveURL(serverSettings));
      ws.onclose = handleClose.bind(ws);
      ws.onerror = handleError.bind(ws);
      ws.onmessage = handleMessage.bind(that);
      ws.onopen = handleOpen.bind(ws);
    } catch (error) {
      nay(`WebSocket instantiation failed!`, error);
      ws = null;
    } finally {
      debounced = true;
    }
  }
  return ws;
};

export { arrangeWebSocketConnection };
