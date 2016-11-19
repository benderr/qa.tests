/**
 * Created by RobertSabiryanov on 19.11.16.
 */

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

module.exports={
  init: init,
  getElement: getElement
};
