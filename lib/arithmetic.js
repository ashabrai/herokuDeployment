'use strict';

const arithmetic = module.exports = {};

arithmetic.addNumbers = function (a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError('only numbers');
  }
  return a + b;
};
arithmetic.subNumbers = function (a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError('only numbers');
  }
  return a - b;
};
