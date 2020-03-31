import http from "http";
import { nay } from "../../utils/nay.js";
import { say } from "../../utils/say.js";

function handleHTTPError(this: http.Server, error: Error): void {
  nay(`HTTP server ran into trouble!`);
  say(`Error: ${error}`);
}

export { handleHTTPError };
