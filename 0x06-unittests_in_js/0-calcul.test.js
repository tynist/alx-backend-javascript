const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('checking if numbers round', () => {
    // Test case 1: Both arguments are integers
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('checking if numbers round 2nd round', () => {
    // Test case 2: One argument is a decimal
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('checking if numbers round 3nd round', () => {
    // Test case 3: Both arguments are decimals
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('checking if numbers round 4nd round', () => {
    // Test case 4: Both arguments are decimals
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it('checking negative return', () => {
    // Test case 5: Both arguments are negative decimals
    assert.equal(calculateNumber(-1.3, -3.7), -5);
  });
});
