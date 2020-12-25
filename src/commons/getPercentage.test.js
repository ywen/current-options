import given from 'given2';
import getPercentage from './getPercentage';

describe('getPercentage', () => {
  given('dividend', () => 2);
  given('divisor', () => 3);
  given('result', () => getPercentage({ divisor: given.divisor, dividend: given.dividend }));

  it('returns percentage with 100th precision', () => {
    expect(given.result).toBe(66.67);
  });
});
