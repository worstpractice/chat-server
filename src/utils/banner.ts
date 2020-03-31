const subtitles = {
  toServeAndConnect: `\n                              'TO SERVE AND CONNECT'`,
  sockItToMe: `\n                                   'SOCK-ET TO ME!'`,
};

const selectRandomSubtitle = (): string => {
  return Math.random() >= 0.5 ? subtitles.toServeAndConnect : subtitles.sockItToMe;
};

const banner = `
 ░██╗░░░░░░░██╗░█████╗░██╗████████╗███████╗██████╗░░░░██╗░░░██╗░░███╗░░░░░░█████╗░░
 ░██║░░██╗░░██║██╔══██╗██║╚══██╔══╝██╔════╝██╔══██╗░░░██║░░░██║░████║░░░░░██╔══██╗░
 ░╚██╗████╗██╔╝███████║██║░░░██║░░░█████╗░░██████╔╝░░░╚██╗░██╔╝██╔██║░░░░░██║░░██║░
 ░░████╔═████║░██╔══██║██║░░░██║░░░██╔══╝░░██╔══██╗░░░░╚████╔╝░╚═╝██║░░░░░██║░░██║░
 ░░╚██╔╝░╚██╔╝░██║░░██║██║░░░██║░░░███████╗██║░░██║░░░░░╚██╔╝░░███████╗██╗╚█████╔╝░
 ░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝░░░░░░╚═╝░░░╚══════╝╚═╝░╚════╝░░
${selectRandomSubtitle()}\n`;

const displayBanner = (): void => {
  console.clear();
  console.log(banner);
};

export { displayBanner };
