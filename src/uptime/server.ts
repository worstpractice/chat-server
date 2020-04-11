import process from "process";
import { hey } from "../terminal/hey.js";
import { DateComponent } from "../typings/declarations.js";
import { hoursToDays, minutesToHours, secondsToMinutes } from "../utils/timeConversion.js";

const deriveServerUptime = (): string => {
  let processUptime: DateComponent = secondsToMinutes(process.uptime());
  let output: string = `${processUptime} minutes`;

  if (hoursToDays(processUptime) >= 1) {
    output = `${hoursToDays(processUptime)} days`;
  }

  if (minutesToHours(processUptime) >= 1) {
    output = `${minutesToHours(processUptime)} hours`;
  }

  return output;
};

const printServerUptime = (): void => {
  hey(`Uptime: ${deriveServerUptime()}`);
};

export { printServerUptime };
