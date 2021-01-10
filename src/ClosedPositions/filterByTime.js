import { createSelector } from 'reselect';
import filterClosedPositionsByAccountId from '../position/filterClosedPositionsByAccountId';
import { getDateByName } from './timeFilterNames';

const filterByTime = createSelector(
  filterClosedPositionsByAccountId,
  state => state.closedPositionsFilter,
  (positions, filterName) => {
    const { startDate, endDate } = getDateByName({name: filterName });
    return positions.filter(position => {
      const closedDate = new Date(position.get('closedDate'));
      return closedDate >= startDate && closedDate <= endDate;
    })
  }
);

export default filterByTime;
