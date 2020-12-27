import { createSelector } from 'reselect';
import Immutable from 'immutable';

import getAvgTurnOverDays from './getAvgTurnOverDays';
import getPercentage from '../commons/getPercentage';

const getTotal = ({ list, key }) => (
  list.reduce((result, p) => {
    return Number(p.get(key)) + result;
  }, 0)
);

const getTotalStocks = ({useSummary, list}) => (
  useSummary ? list.count() : list.groupBy(p => p.get('stockSymbol')).count()
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
        let allList = Immutable.fromJS([]);
        const totalOccupied = getTotal({list, key: occupiedName});
        list.forEach((v, k) => {
          allList = allList.concat(v.get('list'));
        });
        const avgTurnOverDays = getAvgTurnOverDays({ list: allList });
        const avgPerDayEarning = (totalProfit/avgTurnOverDays).toFixed(2);
        const profitToOccupied = getPercentage({dividend: avgPerDayEarning, divisor: totalOccupied});
        return Immutable.fromJS({
          totalStocks,
          totalProfit,
          avgTurnOverDays,
          avgPerDayEarning,
          profitToOccupied,
        });
      } else {
        const potentialName = useSummary ? 'potential' : 'potentialGain';
        const totalPotential = getTotal({list, key: potentialName});
        return Immutable.fromJS({
          totalStocks,
          totalOccupied,
          totalPotential,
        });
      }
    }
  )
);

const makeTotalSummaryInfoSelector = ({ use, hasProfit }) => {
  const func = makeSelector({ useSummary: use === 'summaryFormat', hasProfit });
  return () => func;
}

export default makeTotalSummaryInfoSelector;
