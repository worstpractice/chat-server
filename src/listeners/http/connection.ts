import http from "http";
import { Socket } from "net";
import { nay } from "../../terminal/nay.js";
import { say } from "../../terminal/say.js";
import { yay } from "../../terminal/yay.js";

function handleHTTPConnection(this: http.Server, _socket: Socket): void {
  yay(`HTTP client connected!`);
  this.getConnections(getConnectionsCallback);
}

function getConnectionsCallback(error: Error | null, count: number): void {
  if (error) return nay(`There was an error in retrieving the current number of connections!`);
  if (count) return say(`Current number of connections: ${count}`);
}

export { handleHTTPConnection };
