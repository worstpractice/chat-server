import { nay } from "../../terminal/nay.js";
import { say } from "../../terminal/say.js";

const handleUnhandledRejection: NodeJS.UnhandledRejectionListener = (reason, promise): void => {
  nay(`Unhandled rejection was handled!`);
  say(`Reason: ${reason}`);
  say(`Promise: ${promise}`);
};

export { handleUnhandledRejection };
