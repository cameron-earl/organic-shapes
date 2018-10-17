const TAU = Math.PI * 2;

//num from 0 to 1
const percentSin = num => Math.sin(num * TAU) / 2 + .5;

//num from 0-1 to 0-100, rounded
const percentify = num => round(num * 100, 3)

const randomlyNegative = num => num * (coinFlip() ? 1 : -1);

const coinFlip = () => !Math.round(Math.random());

//num between 0 and 1
const constrain = (num, min, max) => (num * (max - min)) + min;

const round = (num, places) => {
  const multiplier = 10 ** places;
  return Math.round(num * multiplier) / multiplier;
}
