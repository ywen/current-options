import given from 'given2';

import getDaysDifference from './getDaysDifference';

describe('getDaysDifference', () => {
  given('result', () => getDaysDifference({ day1: given.day1, day2: given.day2 }));
  given('day1', () => '12/18/2020');
  given('day2', () => '12/20/2020');
  describe('when a day is a string', () => {
    it('returns day difference', () => {
      expect(given.result).toBe(2);
    });
  });

  describe('when a day is a date with a time', () => {
    given('day1', () => '12/21/2020');
    given('day2', () => '12/23/2020, 8:05:54 AM');
    it('returns day difference', () => {
      expect(given.result).toBe(2);
    });
  });
});
