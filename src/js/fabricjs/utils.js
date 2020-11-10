function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function pad(str, length) {
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  return (
    '#' +
    pad(getRandomInt(0, 255).toString(16), 2) +
    pad(getRandomInt(0, 255).toString(16), 2) +
    pad(getRandomInt(0, 255).toString(16), 2)
  );
}

function getRandomLeftTop() {
  const offset = 200;
  return {
    left: getRandomInt(0 + offset, 700 - offset),
    top: getRandomInt(0 + offset, 700 - offset),
  };
}

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

export {
  capitalize,
  pad,
  getRandomColor,
  getRandomNum,
  getRandomLeftTop,
  getRandomInt,
};
