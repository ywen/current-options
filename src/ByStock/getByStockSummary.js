import Immutable from 'immutable';
import { createSelector } from 'reselect';

import getPercentage from '../commons/getPercentage';
import getTotalAmount from '../position/getTotalAmount';
import sortPositions from '../position/sortPositions';

const getByStockSummary = createSelector(
  (state) => state.positions,
  (state) => state.sortByStockConditions,
  (positions, sort) => {
    const { totalPotential, totalOccupied } = getTotalAmount({ positions });
    const byStockSymbol = positions.groupBy(p => p.get('stockSymbol'));
    const unsorted = byStockSymbol.map((list, stock) => {
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
        stock,
        list,
      });
    });
    return sortPositions({ positions: unsorted, sortConditions: sort });
  }
);

export default getByStockSummary;
