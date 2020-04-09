import { count } from "../../utils/console";
import { nay } from "../../utils/nay";
import { yay } from "../../utils/yay";

function handleClose(this: WebSocket, { code, reason, wasClean }: CloseEvent): void {
  count(`client: handleClose`);
  if (wasClean) {
    yay(`Connection closed cleanly.`);
    if (code) yay(`Code: ${code}`);
    if (reason) yay(`Reason: ${reason}`);
  } else {
    nay(`Connection closed unexpectedly!`);
    if (code) nay(`Code: ${code}`);
    if (reason) nay(`Reason: ${reason}`);
  }
}

export { handleClose };
