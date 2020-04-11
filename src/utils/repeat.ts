import { Callback } from "../typings/declarations.js";

const fiveMinutesInMS = 300_000;

const everyFiveMinutes = (task: Callback) => {
  setInterval(task, fiveMinutesInMS);
};

export { everyFiveMinutes };
