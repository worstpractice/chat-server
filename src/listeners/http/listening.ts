import http from "http";
import { yay } from "../../terminal/yay.js";

function handleHTTPListening(this: http.Server): void {
  yay(`HTTP server is now listening!`);
}

export { handleHTTPListening };
