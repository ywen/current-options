import { createSelector } from 'reselect';
import Immutable from 'immutable';

import getAvgTurnOverDays from './getAvgTurnOverDays';

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
      const totalStocks = getTotalStocks({useSummary, list});
      if (hasProfit) {
        const totalProfit= getTotal({list, key: 'profit'});
        let allList = Immutable.fromJS([]);
        list.forEach((v, k) => {
          allList = allList.concat(v.get('list'));
        });
        const avgTurnOverDays = getAvgTurnOverDays({ list: allList });
        return Immutable.fromJS({
          totalStocks,
          totalProfit,
          avgTurnOverDays,
        });
      } else {
        const occupiedName = useSummary ? 'occupied' : 'moneyOccupied';
        const potentialName = useSummary ? 'potential' : 'potentialGain';
        const totalOccupied = getTotal({list, key: occupiedName});
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
