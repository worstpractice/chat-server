import http from "http";
import { nay } from "../../terminal/nay.js";
import { say } from "../../terminal/say.js";

function handleHTTPError(this: http.Server, error: Error): void {
  nay(`HTTP server ran into trouble!`);
  say(`Error: ${error}`);
}

export { handleHTTPError };
