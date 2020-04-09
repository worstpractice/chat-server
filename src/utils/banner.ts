import { clear, log } from "console";
import { ASCII } from "./font.js";

const subtitles = {
  toServeAndConnect: `\n                              'TO SERVE AND CONNECT'`,
  sockItToMe: `\n                                   'SOCK-ET TO ME!'`,
};

const selectRandomSubtitle = (): string => {
  return Math.random() >= 0.5 ? subtitles.toServeAndConnect : subtitles.sockItToMe;
};

const banner = `
 ░██╗░░░░░░░██╗░█████╗░██╗████████╗███████╗██████╗░░░░██╗░░░██╗${ASCII[1][0]}░░░${ASCII[0][0]}░░
 ░██║░░██╗░░██║██╔══██╗██║╚══██╔══╝██╔════╝██╔══██╗░░░██║░░░██║${ASCII[1][1]}░░░${ASCII[0][1]}░░
 ░╚██╗████╗██╔╝███████║██║░░░██║░░░█████╗░░██████╔╝░░░╚██╗░██╔╝${ASCII[1][2]}░░░${ASCII[0][2]}░░
 ░░████╔═████║░██╔══██║██║░░░██║░░░██╔══╝░░██╔══██╗░░░░╚████╔╝░${ASCII[1][3]}░░░${ASCII[0][3]}░░
 ░░╚██╔╝░╚██╔╝░██║░░██║██║░░░██║░░░███████╗██║░░██║░░░░░╚██╔╝░░${ASCII[1][4]}██╗${ASCII[0][4]}░░
 ░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝░░░░░░╚═╝░░░${ASCII[1][5]}╚═╝${ASCII[0][5]}░░
${selectRandomSubtitle()}\n`;

const displayBanner = (): void => {
  clear();
  log(banner);
};

export { displayBanner };
