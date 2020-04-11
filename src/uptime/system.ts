import os from "os";
import { hey } from "../terminal/hey.js";
import { DateComponent } from "../typings/declarations.js";
import { hoursToDays, minutesToHours, secondsToMinutes } from "../utils/timeConversion.js";

const deriveSystemUptime = (): string => {
  const systemUptime: DateComponent = secondsToMinutes(os.uptime());
  let output: string = `${systemUptime} minutes`;

  if (hoursToDays(systemUptime) >= 1) {
    output = `${hoursToDays(systemUptime)} days`;
  }

  if (minutesToHours(systemUptime) >= 1) {
    output = `${minutesToHours(systemUptime)} hours`;
  }

  return output;
};

const printSystemUptime = (): void => {
  hey(`System uptime: ${deriveSystemUptime()}`);
};

export { printSystemUptime };
