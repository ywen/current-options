import { createSelector } from 'reselect';

import getSummaryFromPositions from '../position/getSummaryFromPositions';
import filterByCurrentAccountId from '../position/filterByCurrentAccountId';

const getByStockSummary = createSelector(
  filterByCurrentAccountId,
  state => state.sortByStockConditions,
  (positions, sort) => getSummaryFromPositions({ positions, sort })
);

export default getByStockSummary;
