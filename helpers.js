const percentSin = num => Math.sin(num * Math.PI * 2) / 2 + .5;

const percentify = num => Number(`${num * 100}`.slice(0, 5));

const randomlyNegative = num => num * (Math.random() > .5 ? 1 : -1);

const constrain = (percent, min, max) => (percent * (max - min)) + min;
