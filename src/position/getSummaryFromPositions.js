import getPercentage from '../commons/getPercentage';
import getTotalAmount from '../position/getTotalAmount';
import sortPositions from '../position/sortPositions';
import getAvgTurnOverDays from '../position/getAvgTurnOverDays';

import groupBy from 'commons/groupBy';

const getSummaryFromPositions = ({ positions, sort }) => {
  const { totalPotential, totalOccupied } = getTotalAmount({ positions });
  const byStockSymbol = groupBy({ data: positions, key: 'stockSymbol' });
  const unsorted = [];
  Object.keys(byStockSymbol).forEach(stockSymbol => {
    const list = byStockSymbol[stockSymbol];
    const {
      totalPotential: potential,
      totalOccupied: occupied,
      totalProfit: profit,
    } = getTotalAmount({ positions: list });
    const potentialPercentage = getPercentage({ dividend: potential, divisor: totalPotential });
    const occupiedPercentage = getPercentage({ dividend: occupied, divisor: totalOccupied });
    const potentialToTotal = getPercentage({ dividend: potential, divisor: occupied });
    const profitToPotential = getPercentage({ dividend: profit, divisor: potential });
    const avgTurnOverDays = getAvgTurnOverDays({ list });
    const profitPerTurnoverDay = (profit/avgTurnOverDays).toFixed(2);
    const profitToOccupied = getPercentage({ dividend: profitPerTurnoverDay, divisor: occupied });
    unsorted.push({
      avgTurnOverDays,
      list,
      occupied,
      occupiedPercentage,
      potential,
      potentialPercentage,
      potentialToTotal,
      profit,
      profitPerTurnoverDay,
      profitToOccupied,
      profitToPotential,
      stockSymbol,
    });
  });
  return sortPositions({ positions: unsorted, sortConditions: sort });
};

export default getSummaryFromPositions;
