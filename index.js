const delay = 1000 / 60;
const blobs = [];

window.onload = () => {
  createShapes();
  setInterval(tick, delay)
}

const createShapes = () => {
  const elements = [...document.querySelectorAll('.shape')];
  for (let el of elements) {
    blobs.push(new Blob(el));
  }
}

const tick = () => {
  for (let blob of blobs) {
    blob.tick();
  }
}
