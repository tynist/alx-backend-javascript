const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the correct sum when both arguments are integers', () => {
    // Test case 1: Both arguments are integers
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round the arguments and return the correct sum when one argument is a decimal', () => {
    // Test case 2: One argument is a decimal
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round the arguments and return the correct sum when both arguments are decimals', () => {
    // Test case 3: Both arguments are decimals
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round the arguments and return the correct sum when both arguments are decimals', () => {
    // Test case 4: Both arguments are decimals
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
