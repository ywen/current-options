import Immutable from 'immutable';

import getPercentage from '../commons/getPercentage';
import getTotalAmount from '../position/getTotalAmount';
import sortPositions from '../position/sortPositions';
import getAvgTurnOverDays from '../position/getAvgTurnOverDays';

const getSummaryFromPositions = ({ positions, sort }) => {
  const { totalPotential, totalOccupied } = getTotalAmount({ positions });
  const byStockSymbol = positions.groupBy(p => p.get('stockSymbol'));
  const unsorted = byStockSymbol.map((list, stockSymbol) => {
    const {
      totalPotential: potential,
      totalOccupied: occupied,
      totalProfit: profit,
    } = getTotalAmount({ positions: list });
    const potentialPercentage = getPercentage({ dividend: potential, divisor: totalPotential });
    const occupiedPercentage = getPercentage({ dividend: occupied, divisor: totalOccupied });
    const potentialVsTotal = getPercentage({ dividend: potential, divisor: occupied });
    const profitToPotential = getPercentage({ dividend: profit, divisor: potential });
    const profitToOccupied = getPercentage({ dividend: profit, divisor: occupied });
    const avgTurnOverDays = getAvgTurnOverDays({ list });
    const profitPerTurnoverDay = (profit/avgTurnOverDays).toFixed(2);
    return Immutable.fromJS({
      avgTurnOverDays,
      list,
      occupied,
      occupiedPercentage,
      potential,
      potentialPercentage,
      potentialVsTotal,
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
