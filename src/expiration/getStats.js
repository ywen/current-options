import { createSelector } from 'reselect';

import getPercentage from '../commons/getPercentage';
import getTotalAmount from '../position/getTotalAmount';
import sortPositions from '../position/sortPositions';
import filterByCurrentAccountId from '../position/filterByCurrentAccountId';
import groupBy from 'commons/groupBy';

const func = createSelector(
  filterByCurrentAccountId,
  (state) => state.sortExpirationView,
  (positions, sort) => {
    const { totalPotential, totalOccupied } = getTotalAmount({ positions });
    const sorted = positions.sort((p1, p2) => {
      return p1.expirationDate > p2.expirationDate ? 1 : -1;
    });
    const grouped = groupBy({ data: sorted, key: 'expirationDate' });
    let group = [];
    Object.keys(grouped).forEach(key => {
      const list = grouped[key];
      const { totalPotential: potential, totalOccupied: occupied } = getTotalAmount({ positions: list });
      const potentialPercentage = getPercentage({ dividend: potential, divisor: totalPotential });
      const occupiedPercentage = getPercentage({ dividend: occupied, divisor: totalOccupied });
      group.push({ expirationDate: key, potential, occupied, potentialPercentage, occupiedPercentage });
    });
    return sortPositions({ positions: group, sortConditions: sort });
  }
);

export default func;
