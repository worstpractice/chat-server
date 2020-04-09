import { warn } from "console";

/** Convenience function for console-logging failures, as indicated by the "[-]" symbol. */
function nay(...args: any[]): void {
  for (let text of args) {
    warn(` [!] ${text.toString()}\n`);
  }
}

export { nay };
