import { log, warn } from "./console";

const style = [
  `font-weight: bold`,
  `color: rgb(238, 107, 71)`,
  `font-size: 1em`,
].join(`;`);

/** Convenience function for console-logging failures, as indicated by the red text and "[!]" symbol. */
const nay = (text: string, error?: Error) => {
  log(`%c[!] ${text}`, style);
  if (error) {
    warn(error);
  }
};

export { nay };
