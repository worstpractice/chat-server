import os from "os";
import { hay } from "../terminal/hay.js";
import { hoursToDays, minutesToHours, secondsToMinutes } from "../time/timeConversion.js";
import { DateComponent } from "../typings/declarations.js";

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
  hay(`System uptime: ${deriveSystemUptime()}`);
};

export { printSystemUptime };
