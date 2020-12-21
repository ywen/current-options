import { createSelector } from 'reselect';
import Immutable from 'immutable';

const getStats = ({ list }) => {
  return list.reduce((result, p) => {
    const totalOccupied = Number(p.get('moneyOccupied')) + result.totalOccupied;
    const totalPotential = Number(p.get('potentialGain')) + result.totalPotential;
    return { totalOccupied, totalPotential };
  }, { totalOccupied: 0, totalPotential: 0 });
};

const getPercentage = ({ dividend, divisor }) => {
  return `% ${(dividend / divisor * 100).toFixed(2)}`
};

const func = createSelector(
  (state) => state.positions,
  (positions) => {
    const { totalPotential, totalOccupied } = getStats({list: positions });
    const sorted = positions.sort((p1, p2) => {
      return p1.get('expirationDate') > p2.get('expirationDate') ? 1 : -1;
    });
    const grouped = sorted.groupBy(p => p.get('expirationDate'));
    return grouped.map((list, key) => {
      const { totalPotential: potential, totalOccupied: occupied } = getStats({ list });
      const potentialPercentage = getPercentage({ dividend: potential, divisor: totalPotential });
      const occupiedPercentage = getPercentage({ dividend: occupied, divisor: totalOccupied });
      return Immutable.fromJS({ potential, occupied, potentialPercentage, occupiedPercentage });
    });
  }
);

export default func;
