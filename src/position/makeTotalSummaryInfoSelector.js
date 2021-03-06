import { createSelector } from 'reselect';

import getAvgTurnOverDays from './getAvgTurnOverDays';
import getPercentage from '../commons/getPercentage';
import groupBy from 'commons/groupBy';

const getTotal = ({ list, key }) => (
  list.reduce((result, p) => Number(p[key]) + result, 0)
);

const getTotalStocks = ({useSummary, list}) => (
  useSummary ? list.length : Object.keys(groupBy({ data: list, key: 'stockSymbol' })).length
);

const makeSelector = ({useSummary, hasProfit}) => (
  createSelector(
    (_, list) => list,
    list => {
      const occupiedName = useSummary ? 'occupied' : 'moneyOccupied';
      const totalStocks = getTotalStocks({useSummary, list});
      const totalOccupied = getTotal({list, key: occupiedName});
      if (hasProfit) {
        const totalProfit= getTotal({list, key: 'profit'});
        let allList = [];
        const totalOccupied = getTotal({list, key: occupiedName});
        if (useSummary) {
          list.forEach(v => {
            allList = allList.concat(v.list);
          });
        } else {
          allList = list;
        }
        const avgTurnOverDays = getAvgTurnOverDays({ list: allList });
        const avgPerDayEarning = (totalProfit/avgTurnOverDays).toFixed(2);
        const profitToOccupied = getPercentage({dividend: avgPerDayEarning, divisor: totalOccupied});
        return {
          totalStocks,
          totalProfit,
          avgTurnOverDays,
          avgPerDayEarning,
          profitToOccupied,
        };
      } else {
        const potentialName = useSummary ? 'potential' : 'potentialGain';
        const totalPotential = getTotal({list, key: potentialName});
        return {
          totalStocks,
          totalOccupied,
          totalPotential,
        };
      }
    }
  )
);

const makeTotalSummaryInfoSelector = ({ use, hasProfit }) => {
  const func = makeSelector({ useSummary: use === 'summaryFormat', hasProfit });
  return () => func;
}

export default makeTotalSummaryInfoSelector;
