import { createSelector } from 'reselect';

import getPercentage from '../commons/getPercentage';
import getTotalAmount from '../position/getTotalAmount';
import sortPositions from '../position/sortPositions';
import makeFilterByAccountSelector from 'position/makeFilterByAccountSelector';
import groupBy from 'commons/groupBy';
import Position from 'position/shape';
import StatsType from './StatsType';

const filterByAccountId = makeFilterByAccountSelector({ positionKind: 'positions' });

const getStats = createSelector(
  filterByAccountId,
  (state) => state.sortExpirationView,
  (positions, sort) => {
    const { totalPotential, totalOccupied } = getTotalAmount({ positions });
    const sorted = positions.sort((p1: Position, p2: Position) => {
      return p1.expirationDate > p2.expirationDate ? 1 : -1;
    });
    const grouped = groupBy({ data: sorted, key: 'expirationDate' });
    let group:StatsType[] = [];
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

export default getStats;
