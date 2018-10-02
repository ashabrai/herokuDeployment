'use strict';

const arithmetic = require('../lib/arithmetic');


describe('#arithmetic.test.js', () => {
  test('How to add things together', () => {
    const addNum = arithmetic.addNumbers(3, 5);
    expect(addNum).toEqual(8);
  });
  test('When you have a NAN and add this will happen', () => {
    expect(() => arithmetic.addNumbers(Number.NaN, 5)).toThrow();
  });

  test('When you subtract numbers this will happen', () => {
    const subNum = arithmetic.subNumbers(5, 4);
    expect(subNum).toEqual(1);
  });
  test('When you have a NAN and subtract this will happen', () => {
    expect(() => arithmetic.subNumbers(Number.NaN, 4)).toThrow();
  });
});
