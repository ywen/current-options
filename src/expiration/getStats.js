import { createSelector } from 'reselect';
import Immutable from 'immutable';

import getPercentage from '../commons/getPercentage';
import getTotalAmount from '../position/getTotalAmount';
import sortPositions from '../position/sortPositions';
import filterByCurrentAccountId from '../position/filterByCurrentAccountId';

const func = createSelector(
  filterByCurrentAccountId,
  (state) => state.sortExpirationView,
  (positions, sort) => {
    const { totalPotential, totalOccupied } = getTotalAmount({ positions });
    const sorted = positions.sort((p1, p2) => {
      return p1.get('expirationDate') > p2.get('expirationDate') ? 1 : -1;
    });
    const grouped = sorted.groupBy(p => p.get('expirationDate'));
    const group = grouped.map((list, key) => {
      const { totalPotential: potential, totalOccupied: occupied } = getTotalAmount({ positions: list });
      const potentialPercentage = getPercentage({ dividend: potential, divisor: totalPotential });
      const occupiedPercentage = getPercentage({ dividend: occupied, divisor: totalOccupied });
      return Immutable.fromJS({ expirationDate: key, potential, occupied, potentialPercentage, occupiedPercentage });
    });
  return sortPositions({ positions: group, sortConditions: sort });
  }
);

export default func;
