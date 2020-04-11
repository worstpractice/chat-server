import http from "http";
import { nay } from "../../terminal/nay.js";

function handleHTTPClose(this: http.Server): void {
  nay(`HTTP server is now closed!`);
}

export { handleHTTPClose };
