import process from "process";
import { hay } from "../terminal/hay.js";
import { hoursToDays, minutesToHours, secondsToMinutes } from "../time/timeConversion.js";
import { PieceOfDate } from "../typings/declarations.js";

const deriveServerUptime = (): string => {
  let processUptime: PieceOfDate = secondsToMinutes(process.uptime());
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
  hay(`Uptime: ${deriveServerUptime()}`);
};

export { printServerUptime };
