import { clear, log } from "console";
import { ASCII } from "./font.js";

const alignment = `                                            `;

const subtitles = {
  toServeAndConnect: `\n${alignment}'TO SERVE AND CONNECT'`,
  sockItToMe: `\n${alignment}'SOCK-ET TO ME!'`,
};

const selectRandomSubtitle = (): string => {
  return Math.random() >= 0.5 ? subtitles.toServeAndConnect : subtitles.sockItToMe;
};

const MAJOR = 0;
const MINOR = 9;
const PATCH = 9;

const banner = `
 ░██╗░░░░░░░██╗░░█████╗░░██╗░████████╗░███████╗░██████╗░░░░░░░░░░░░░░${ASCII[MAJOR][0]}░░░░░${ASCII[MINOR][0]}░░░░░${ASCII[PATCH][0]}░
 ░██║░░██╗░░██║░██╔══██╗░██║░╚══██╔══╝░██╔════╝░██╔══██╗░░░██╗░░░██╗░${ASCII[MAJOR][1]}░░░░░${ASCII[MINOR][1]}░░░░░${ASCII[PATCH][1]}░
 ░╚██╗████╗██╔╝░███████║░██║░░░░██║░░░░█████╗░░░██████╔╝░░░╚██╗░██╔╝░${ASCII[MAJOR][2]}░░░░░${ASCII[MINOR][2]}░░░░░${ASCII[PATCH][2]}░
 ░░████╔═████║░░██╔══██║░██║░░░░██║░░░░██╔══╝░░░██╔══██╗░░░░╚████╔╝░░${ASCII[MAJOR][3]}░░░░░${ASCII[MINOR][3]}░░░░░${ASCII[PATCH][3]}░
 ░░╚██╔╝░╚██╔╝░░██║░░██║░██║░░░░██║░░░░███████╗░██║░░██║░░░░░╚██╔╝░░░${ASCII[MAJOR][4]}░██╗░${ASCII[MINOR][4]}░██╗░${ASCII[PATCH][4]}░
 ░░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝░╚═╝░░░░╚═╝░░░░╚══════╝░╚═╝░░╚═╝░░░░░░╚═╝░░░░${ASCII[MAJOR][5]}░╚═╝░${ASCII[MINOR][5]}░╚═╝░${ASCII[PATCH][5]}░
${selectRandomSubtitle()}\n`;

const displayBanner = (): void => {
  clear();
  log(banner);
};

export { displayBanner };
