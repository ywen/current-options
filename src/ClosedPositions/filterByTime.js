import { createSelector } from 'reselect';
import filterClosedPositionsByAccountId from '../position/filterClosedPositionsByAccountId';

const filterByTime = createSelector(
  filterClosedPositionsByAccountId,
  state => state.closedPositionsFilter,
  (positions, filterName) => {
  }
);

export default filterByTime;
