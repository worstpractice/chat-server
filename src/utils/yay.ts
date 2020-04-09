import { log } from "./console";

const style = [
  `font-weight: bold`,
  `color: #669900`,
  `font-size: 1em`,
].join(`;`);

/** Convenience function for console-logging successes, as indicated by the green text and "[+]" symbol. */
const yay = (text: string) => {
  log(`%c[+] ${text}`, style);
};

export { yay };
