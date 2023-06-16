const { expect } = require('chai');
const {describe, it} = require("mocha");
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {

  // Test suite for SUM operation
  describe('SUM', () => {
    it('returns the sum of two rounded numbers', () => {
    // Test case: SUM operation 1
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    // Test case: SUM operation 2
    it('returns the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    // Test case: SUM operation 3
    it("checking if numbers round", function() {
	    expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });
    // Test case: SUM operation 4
    it("checking if numbers round", function() {
	    expect(calculateNumber("SUM", -1, -4.9)).to.equal(-5);
    });

  // Test suite for SUBTRACT operation
  describe('SUBTRACT', () => {
    // Test case: SUBTRACT operation 1
    it('returns difference of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    // Test case: SUBTRACT operation 2
    it('returns difference of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
    it('returns difference of two rounded numbers', () => {
      // Test case: SUBTRACT operation 3
      expect(calculateNumber('SUBTRACT', -4.9, -2.7)).to.equal(-2);
    });
    it("returns difference of two rounded numbers", () {
       // Test case: SUBTRACT operation 4
	    expect(calculateNumber("SUBTRACT", -1.3,-3.7)).to.equal(3);
    });

  // Test suite for DIVIDE operation
  describe('DIVIDE', () => {
    // Test case: DIVIDE operation 1
    it("returns division of two rounded numbers", () {
	    expect(calculateNumber("DIVIDE", -1.4,-4.5)).to.equal(0.2);
    });
    // Test case: DIVIDE operation 2
    it("returns division of two rounded numbers", () {
	    expect(calculateNumber("DIVIDE", -2, 1)).to.equal(-2);
    });
    // Test case: DIVIDE operation 3
    it("returns division of two rounded numbers", () {
	    expect(calculateNumber("DIVIDE", 4, 3.7)).to.equal(1);
    });

    // Test case: returns "Error" for division by zero
    it('returns "Error" for division by zero', () => {
      expect(calculateNumber('DIVIDE', 2.3, 0)).to.equal('Error');
    });
    // Test case: returns "Error" for an invalid type
    it('returns "Error" for an invalid type', () => {
      expect(calculateNumber(5, 1, 4)).to.equal('Error');
    });

    it('returns "Error" for an invalid type', () => {
      expect(calculateNumber('plus', 1, 4)).to.equal('Error');
    });
});
