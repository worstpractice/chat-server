import http from "http";
import { yay } from "../../utils/yay.js";

function handleHTTPListening(this: http.Server): void {
  yay(`HTTP server is now listening!`);
}

export { handleHTTPListening };

