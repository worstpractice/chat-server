const divideBy24 = (unitOfTime: number): number => {
  return Math.floor(unitOfTime / 24);
};

const divideBy60 = (unitOfTime: number): number => {
  return Math.floor(unitOfTime / 60);
};

export { divideBy60 as secondsToMinutes, divideBy60 as minutesToHours, divideBy24 as hoursToDays };
