const sum = require('../sum-util');

describe('sum-util', () => {

  describe('getNumberArray()', () => {
    it('maps a diverse array into an array containing only numbers', () => {
      // set initial state
      let diverseArr = [23, '123', '43ke', 'dsff', undefined, NaN, '0.0314E+2', '0x11', 2];
      let filterNums = [23, 123, 3.14, 17, 2];

      // inspect getNumberArray
      expect(sum.getNumberArray(diverseArr)).toEqual(filterNums);
    });
  });

  describe('getArraySum()', () => {
    it('gets the sum of an array', () => {
      // set initial state
      let diverseArr = [23, '123', '43ke', 'dsff', undefined, NaN, '0.0314E+2', '0x11', 2];

      // inspect getArraySum
      expect(sum.getArraySum(diverseArr)).toEqual(168.14);
    });
  });
});