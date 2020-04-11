import { execSync } from "child_process";
import { clear } from "console";
import { platform } from "os";

/** For when `clear()` doesn't cut it. */
const clearScreen = () => {
  clear();
  if (platform() === "win32") {
    execSync("cls");
  } else {
    execSync("clear");
  }
};

export { clearScreen };
