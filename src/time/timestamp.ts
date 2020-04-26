import { PieceOfDate } from "../typings/declarations.js";

const prefixWithZero = (unit: number): string => {
  return `0${unit}`;
};

const dayMonthYear = (): string => {
  const now = new Date();

  let dd: PieceOfDate = now.getDate();
  if (dd < 10) {
    dd = prefixWithZero(dd);
  }

  let mm: PieceOfDate = now.getMonth() + 1;
  if (mm < 10) {
    mm = prefixWithZero(mm);
  }

  const yyyy: PieceOfDate = now.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
};

const hourMinuteSecond = (): string => {
  const now = new Date();

  let s: PieceOfDate = now.getSeconds();
  if (s < 10) {
    s = prefixWithZero(s);
  }

  let m: PieceOfDate = now.getMinutes();
  if (m < 10) {
    m = prefixWithZero(m);
  }

  let h: PieceOfDate = now.getHours();
  if (h < 10) {
    h = prefixWithZero(h);
  }

  return `${h}:${m}:${s}`;
};

export { hourMinuteSecond, dayMonthYear };
