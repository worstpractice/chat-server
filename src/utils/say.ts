import { log } from "./console";

const style = [
  `font-weight: bold`,
  `font-size: 1em`
].join(`;`);

/** Convenience function for console-logging in general, as indicated by the white text and "[*]" symbol. */
const say = (text: string) => {
  log(`%c[*] ${text}`, style);
};

export { say };
