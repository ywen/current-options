import given from 'given2';
import isSell from './isSell';

describe('.isSell', () => {
  given('quantity', () => -2);
  given('position', () => ({ quantity: given.quantity }));
  given('result', () => isSell({ position: given.position }));
  describe('with negative number', () => {
    it('is sell', () => {
      expect(given.result).toBe(true);
    });
  });

  describe('with positive number', () => {
    given('quantity', () => '1');
    it('is not sell', () => {
      expect(given.result).toBe(false);
    });
  });
});
