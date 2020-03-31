/** Convenience function for general console-logging, as indicated by the "[*]" symbol. */
function say(...args: any[]): void {
  for (let text of args) {
    console.log(` [*] ${text.toString()}\n`);
  }
}

export { say };
