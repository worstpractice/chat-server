import chalk from "chalk";
import { log } from "console";
import { hourMinuteSecond } from "./timestamp.js";

const plus = `${chalk.greenBright("+")}`;

/** Convenience function for console-logging successes, as indicated by the green "[+]" symbol. */
function yay(...args: any[]): void {
  for (let text of args) {
    log(` ${chalk.gray(hourMinuteSecond())} [${plus}] ${text.toString()}\n`);
  }
}

export { yay };
