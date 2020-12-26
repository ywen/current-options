import Immutable from 'immutable';
import given from 'given2';
import getAvgTurnOverDays from './getAvgTurnOverDays';

describe('getAvgTurnOverDays', () => {
  given('l1', () => Immutable.fromJS({
    closedDate: '12/20/2020',
    openDate: '12/18/2020',
  }));
  given('l2', () => Immutable.fromJS({
    closedDate: '12/11/2020',
    openDate: '11/15/2020',
  }));
  given('l3', () => Immutable.fromJS({
    closedDate: given.closedDate,
    openDate: '11/15/2020',
  }));
  given('list', () => (
    Immutable.fromJS([ given.l1, given.l2, given.l3 ])
  ));

  given('result', () => getAvgTurnOverDays({ list: given.list }))

  describe('when the closedDate is absent', () => {
    given('closedDate', () => undefined);
    it('returns null', () => {
      expect(given.result).toBe(null);
    });
  });

  describe('when the closedDate exists', () => {
    given('closedDate', () => '11/15/2020');
    it('returns avg turnover rate', () => {
      expect(given.result).toBe(12);
    });
  });
});
