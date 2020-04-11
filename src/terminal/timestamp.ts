const prefixWithZero = (unit: number): string => {
  return `0${unit}`;
};

const dayMonthYear = (): string => {
  const today = new Date();

  let dd: number | string = today.getDate();
  if (dd < 10) {
    dd = prefixWithZero(dd);
  }

  let mm: number | string = today.getMonth() + 1;
  if (mm < 10) {
    mm = prefixWithZero(mm);
  }

  const yyyy: number | string = today.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
};

const hourMinuteSecond = (): string => {
  const now = new Date();

  let s: number | string = now.getSeconds();
  if (s < 10) {
    s = prefixWithZero(s);
  }

  let m: number | string = now.getMinutes();
  if (m < 10) {
    m = prefixWithZero(m);
  }

  let h: number | string = now.getHours();
  if (h < 10) {
    h = prefixWithZero(h);
  }

  return `${h}:${m}:${s}`;
};

export { hourMinuteSecond, dayMonthYear };
