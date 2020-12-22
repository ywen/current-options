import Immutable from 'immutable';
import { createSelector } from 'reselect';

import getPercentage from '../commons/getPercentage';
import getTotalAmount from '../position/getTotalAmount';

const getByStockSummary = createSelector(
  (state) => state.positions,
  (positions) => {
    const { totalPotential, totalOccupied } = getTotalAmount({ positions });
    const byStockSymbol = positions.groupBy(p => p.get('stockSymbol'));
    return byStockSymbol.map((list) => {
      const {
        totalPotential: potential,
        totalOccupied: occupied,
      } = getTotalAmount({ positions: list });
      const potentialPercentage = getPercentage({ dividend: potential, divisor: totalPotential });
      const occupiedPercentage = getPercentage({ dividend: occupied, divisor: totalOccupied });
      return Immutable.fromJS({
        potential,
        occupied,
        potentialPercentage,
        occupiedPercentage,
        list,
      });
    });
  }
);

export default getByStockSummary;
