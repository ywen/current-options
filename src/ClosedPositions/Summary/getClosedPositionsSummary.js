import { createSelector } from 'reselect';

import getSummaryFromPositions from 'position/getSummaryFromPositions';
import filterByTime from '../filterByTime';
const composeSummary = (positions, sort) => getSummaryFromPositions({ positions, sort });

const func = createSelector(
  filterByTime,
  state => state.sortClosedStockSummary,
  composeSummary,
);

export default func;
