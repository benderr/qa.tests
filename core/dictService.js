var arrays={};

function getRandomIndex(dictName) {
  return Math.floor(Math.random() * arrays[dictName].length);
}

function getElement(dictName) {
  return arrays[dictName][getRandomIndex(dictName)];
}

function init(dictName, data) {
  arrays[dictName]= data;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
module.exports={
  init: init,
  getElement: getElement,
  getRandomInt: getRandomInt
};
