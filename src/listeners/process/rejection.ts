import { nay } from "../../utils/nay.js";
import { say } from "../../utils/say.js"

const handleUnhandledRejection: NodeJS.UnhandledRejectionListener = (reason, promise): void => {
  nay(`Unhandled rejection was handled!`);
  say(`Reason: ${reason}`);
  say(`Promise: ${promise}`);
};

export { handleUnhandledRejection };
