import { createSelector } from 'reselect';
import { getDateByName } from './timeFilterNames';
import makeFilterByAccountSelector from 'position/makeFilterByAccountSelector';

const filterByAccountId = makeFilterByAccountSelector({ positionKind: 'closedPositions' });
const filterByTime = createSelector(
  filterByAccountId,
  state => state.closedPositionsFilter,
  (positions, filterName) => {
    const { startDate, endDate } = getDateByName({name: filterName });
    return positions.filter(position => {
      const closedDate = new Date(position.closedDate);
      return closedDate >= startDate && closedDate <= endDate;
    })
  }
);

export default filterByTime;
