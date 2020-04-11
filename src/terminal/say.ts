import chalk from "chalk";
import { log } from "console";
import { hourMinuteSecond } from "../time/timestamp.js";

const asterisk = `${chalk.blueBright("*")}`;

/** Convenience function for general console-logging, as indicated by the blue "[*]" symbol. */
function say(...args: any[]): void {
  for (let text of args) {
    log(` ${chalk.gray(hourMinuteSecond())} [${asterisk}] ${text.toString()}\n`);
  }
}

export { say };
