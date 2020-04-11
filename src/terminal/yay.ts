import { log } from "console";

/** Convenience function for console-logging successes, as indicated by the "[+]" symbol. */
function yay(...args: any[]): void {
  for (let text of args) {
    log(` [+] ${text.toString()}\n`);
  }
}

export { yay };
