import chalk from "chalk";
import { warn } from "console";
import { hourMinuteSecond } from "../utils/timestamp.js";

const questionMark = `${chalk.yellowBright("?")}`;

/** Convenience function for console-logging informative events, as indicated by the yellow "[?]" symbol. */
function hey(...args: any[]): void {
  for (let text of args) {
    warn(` ${chalk.gray(hourMinuteSecond())} [${questionMark}] ${text.toString()}\n`);
  }
}

export { hey };
