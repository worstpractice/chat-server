/** Convenience function for console-logging failures, as indicated by the "[-]" symbol. */
function nay(...args: any[]): void {
  for (let text of args) {
    console.warn(` [!] ${text.toString()}\n`);
  }
}

export { nay };
