import { nay } from "../../terminal/nay.js";
import { say } from "../../terminal/say.js";

const handleUncaughtException: NodeJS.UncaughtExceptionListener = (error): void => {
  nay(`Uncaught exception was caught!`);
  say(`Error: ${error.message}`);
};

export { handleUncaughtException };
