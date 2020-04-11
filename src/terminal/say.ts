import { log } from "console";

/** Convenience function for general console-logging, as indicated by the "[*]" symbol. */
function say(...args: any[]): void {
  for (let text of args) {
    log(` [*] ${text.toString()}\n`);
  }
}

export { say };
