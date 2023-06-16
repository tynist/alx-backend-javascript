const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('returns the sum of two rounded numbers for SUM', () => {
    // Test case 1: SUM operation
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('returns difference of two rounded numbers for SUBTRACT', () => {
    // Test case 2: SUBTRACT operation
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('returns the division of two rounded numbers for DIVIDE', () => {
    // Test case 3: DIVIDE operation
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('returns "Error" for division by zero', () => {
    // Test case 4: DIVIDE by zero
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('returns "Error" for an invalid type', () => {
    // Test case 5: Invalid type provided
    expect(calculateNumber(5, 1, 4)).to.equal('Error');
  });

  it('returns "Error" for an invalid type', () => {
    // Test case 6: Invalid type provided
    expect(calculateNumber('plus', 1, 4)).to.equal('Error');
  });
});
