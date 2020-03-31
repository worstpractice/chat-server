import { nay } from "../../utils/nay.js";
import { say } from "../../utils/say.js"

const handleUncaughtException: NodeJS.UncaughtExceptionListener = (error): void => {
  nay(`Uncaught exception was caught!`);
  say(`Error: ${error.message}`);
};

export { handleUncaughtException };
