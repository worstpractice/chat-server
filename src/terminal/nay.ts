import chalk from "chalk";
import { warn } from "console";
import { hourMinuteSecond } from "./timestamp.js";

const exclamationPoint = `${chalk.redBright("!")}`;

/** Convenience function for console-logging failures, as indicated by the red "[!]" symbol. */
function nay(...args: any[]): void {
  for (let text of args) {
    warn(` ${chalk.gray(hourMinuteSecond())} [${exclamationPoint}] ${text.toString()}\n`);
  }
}

export { nay };
