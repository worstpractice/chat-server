import { DateComponent } from "../typings/declarations.js";

const prefixWithZero = (unit: number): string => {
  return `0${unit}`;
};

const dayMonthYear = (): string => {
  const now = new Date();

  let dd: DateComponent = now.getDate();
  if (dd < 10) {
    dd = prefixWithZero(dd);
  }

  let mm: DateComponent = now.getMonth() + 1;
  if (mm < 10) {
    mm = prefixWithZero(mm);
  }

  const yyyy: DateComponent = now.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
};

const hourMinuteSecond = (): string => {
  const now = new Date();

  let s: DateComponent = now.getSeconds();
  if (s < 10) {
    s = prefixWithZero(s);
  }

  let m: DateComponent = now.getMinutes();
  if (m < 10) {
    m = prefixWithZero(m);
  }

  let h: DateComponent = now.getHours();
  if (h < 10) {
    h = prefixWithZero(h);
  }

  return `${h}:${m}:${s}`;
};

export { hourMinuteSecond, dayMonthYear };
