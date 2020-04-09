import { count } from "../../utils/console";
import { nay } from "../../utils/nay";

function handleError(this: WebSocket, event: Event): void {
  count(`client: handleError`);
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  nay(`A connection error occured!`);
  console.warn(event);
}

export { handleError };
