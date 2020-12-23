import { createSelector } from 'reselect';
import Immutable from 'immutable';

import getPercentage from '../commons/getPercentage';
import getTotalAmount from '../position/getTotalAmount';

const func = createSelector(
  (state) => state.positions,
  (positions) => {
    const { totalPotential, totalOccupied } = getTotalAmount({ positions });
    const sorted = positions.sort((p1, p2) => {
      return p1.get('expirationDate') > p2.get('expirationDate') ? 1 : -1;
    });
    const grouped = sorted.groupBy(p => p.get('expirationDate'));
    return grouped.map((list, key) => {
      const { totalPotential: potential, totalOccupied: occupied } = getTotalAmount({ positions: list });
      const potentialPercentage = getPercentage({ dividend: potential, divisor: totalPotential });
      const occupiedPercentage = getPercentage({ dividend: occupied, divisor: totalOccupied });
      return Immutable.fromJS({ potential, occupied, potentialPercentage, occupiedPercentage });
    });
  }
);

export default func;
