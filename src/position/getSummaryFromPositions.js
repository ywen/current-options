import Immutable from 'immutable';

import getPercentage from '../commons/getPercentage';
import getTotalAmount from '../position/getTotalAmount';
import sortPositions from '../position/sortPositions';

const getSummaryFromPositions = ({ positions, sort }) => {
  const { totalPotential, totalOccupied, totalProfit } = getTotalAmount({ positions });
  const byStockSymbol = positions.groupBy(p => p.get('stockSymbol'));
  const unsorted = byStockSymbol.map((list, stock) => {
    const {
      totalPotential: potential,
      totalOccupied: occupied,
      totalProfit: profit,
    } = getTotalAmount({ positions: list });
    const potentialPercentage = getPercentage({ dividend: potential, divisor: totalPotential });
    const occupiedPercentage = getPercentage({ dividend: occupied, divisor: totalOccupied });
    const potentialVsTotal =  getPercentage({ dividend: potential, divisor: occupied });
    return Immutable.fromJS({
      potential,
      occupied,
      profit,
      potentialPercentage,
      potentialVsTotal,
      occupiedPercentage,
      stock,
      list,
    });
  });
  return sortPositions({ positions: unsorted, sortConditions: sort });
};

export default getSummaryFromPositions;
