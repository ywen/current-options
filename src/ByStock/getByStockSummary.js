import Immutable, { List } from 'immutable';
import { createSelector } from 'reselect';

const getByStockSummary = createSelector(
  (state) => state.positions,
  (positions) => {
    const byStockSymbol = positions.groupBy(p => p.get('stockSymbol'));
    return byStockSymbol.map((list) => {
      return list.reduce((result, position) => {
        return result.merge({
          occupied: position.get('moneyOccupied') + result.get('occupied'),
          potential: position.get('potentialGain') + result.get('potential'),
        });
      }, Immutable.fromJS({
        occupied: 0,
        potential: 0,
        positions: list,
      }));
    });
  }
);

export default getByStockSummary;
