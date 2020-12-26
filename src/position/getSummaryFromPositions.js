import Immutable from 'immutable';

import getPercentage from '../commons/getPercentage';
import getDaysDifference from '../commons/getDaysDifference';
import getTotalAmount from '../position/getTotalAmount';
import sortPositions from '../position/sortPositions';

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
    const turnOverDays = list.reduce((result, p) => {
      if(p.get('closedDate')) {
        result = result === null ? 0 : result;
        return result + getDaysDifference({ day1: p.get('openDate'), day2: p.get('closedDate')});
      } else {
        return null;
      }
    }, null);
    const avgTurnOverDays = turnOverDays === null ? null : Math.floor(turnOverDays/list.count());
    return Immutable.fromJS({
      avgTurnOverDays,
      potential,
      occupied,
      profit,
      profitToPotential,
      profitToOccupied,
      potentialPercentage,
      potentialVsTotal,
      occupiedPercentage,
      stockSymbol,
      list,
    });
  });
  return sortPositions({ positions: unsorted, sortConditions: sort });
};

export default getSummaryFromPositions;
