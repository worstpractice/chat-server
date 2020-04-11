import process from "process";
import { nay } from "../../terminal/nay.js";

const handleSignal: NodeJS.SignalsListener = (signal: NodeJS.Signals): void => {
  nay(`${signal} recieved! Exiting gracefully...`);
  process.exit(0);
};

export { handleSignal };
