import chalk from "chalk";
import { log } from "console";

const plus = `${chalk.greenBright("+")}`;

/** Convenience function for console-logging successes, as indicated by the green "[+]" symbol. */
function yay(...args: any[]): void {
  for (let text of args) {
    log(` [${plus}] ${text.toString()}\n`);
  }
}

export { yay };
