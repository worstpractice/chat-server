import http from "http";
import { nay } from "../../utils/nay.js";

function handleHTTPClose(this: http.Server): void {
  nay(`HTTP server is now closed!`);
}

export { handleHTTPClose };
