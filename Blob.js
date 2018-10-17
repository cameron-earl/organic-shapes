const min = .2;
const max = .8;
const stepBase = .001;
const rotStep = .2;
const scaleStep = .001;

const getRandomStartStep = () => randomlyNegative(stepBase * (Math.random() + .5));

class Blob {

  constructor(element) {
    this.element = element;
    this.t = .25;
    this.b = .25;
    this.l = .25;
    this.r = .25;
    this.stepT = getRandomStartStep();
    this.stepB = getRandomStartStep();
    this.stepL = getRandomStartStep();
    this.stepR = getRandomStartStep();

    this.hue = Math.floor(Math.random() * 360);
    this.sat = 1;
    this.lum = .5;
    this.rot = 0;
    this.scale = 0;
  }

  tick() {
    this.stepRads();
    this.stepHSL();
    this.stepScale();
    this.stepRot();
    this.updateDisplay();
  }

  updateDisplay() {
    this.setBorderRadius();
    this.setColor();
    this.setTransform();
  }

  stepScale() {
    this.scale = (this.scale + scaleStep) % 1;
  }

  stepHSL() {
    this.hue += Math.random() * .001;
    this.sat = (this.sat + Math.random() * .001) % 1;
    this.lum = (this.lum + Math.random() * .001) % 1;
  }

  stepRot() {
    this.rot = (this.rot + rotStep) % 360;
  }

  stepRads() {
    this.t = (this.stepT + this.t) % 1;
    this.b = (this.stepB + this.b) % 1;
    this.l = (this.stepL + this.l) % 1;
    this.r = (this.stepR + this.r) % 1;
  }

  setBorderRadius() {
    const getPos = (percent) => constrain(percentSin(percent), min, max);
    const tr = getPos(this.t);
    const br = getPos(this.b);
    const lt = getPos(this.l);
    const rt = getPos(this.r);
    const tl = 1 - tr;
    const bl = 1 - br;
    const lb = 1 - lt;
    const rb = 1 - rt;
    const p = percentify;
    const topAndBottom = `${p(tl)}% ${p(tr)}% ${p(br)}% ${p(bl)}%`;
    const sides = `${p(lt)}% ${p(rt)}% ${p(rb)}% ${p(lb)}%`;
    this.element.style.borderRadius = `${topAndBottom} / ${sides}`;
  };

  setColor() {
    const p = percentify;
    const satPercent = constrain(percentSin(this.sat), .4, 1);
    const lumPercent = constrain(percentSin(this.lum), .3, .7);
    const bgString = `hsl(${p(this.hue)}, ${p(satPercent)}%, ${p(lumPercent)}%)`
    this.element.style.backgroundColor = bgString;
  }

  setTransform() {
    const scalePercent = constrain(percentSin(this.scale), .8, 1);
    this.element.style.transform = `rotate(${this.rot}deg) scale(${scalePercent})`
  }

}
