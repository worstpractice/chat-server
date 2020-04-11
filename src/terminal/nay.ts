import chalk from "chalk";
import { warn } from "console";

const exclamationPoint = `${chalk.redBright("!")}`;

/** Convenience function for console-logging failures, as indicated by the red "[!]" symbol. */
function nay(...args: any[]): void {
  for (let text of args) {
    warn(` [${exclamationPoint}] ${text.toString()}\n`);
  }
}

export { nay };
