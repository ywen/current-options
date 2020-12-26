import given from 'given2';
import getProfitClasses from './getProfitClasses';

describe('getProfitClasses', () => {
  given('result', () => getProfitClasses({ profit: given.profit }));
  describe('when profit is positive', () => {
    given('profit', () => 12);
    it('returns positive class', () => {
      expect(given.result).toBe('closedStockSummary__td closedStockSummary__td--positive');
    });
  });

  describe('when profit is negative', () => {
    given('profit', () => -12);
    it('returns negative class', () => {
      expect(given.result).toBe('closedStockSummary__td closedStockSummary__td--negative');
    });
  });

  describe('when profit is zero', () => {
    given('profit', () => 0);
    it('returns negative class', () => {
      expect(given.result).toBe('closedStockSummary__td closedStockSummary__td--negative');
    });
  });
});
