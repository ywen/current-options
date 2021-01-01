import { createSelector } from 'reselect';

import getSummaryFromPositions from '../position/getSummaryFromPositions';
import filterClosedPositionsByAccountId from '../position/filterClosedPositionsByAccountId';
const composeSummary = (positions, sort) => getSummaryFromPositions({ positions, sort });

const func = createSelector(
  filterClosedPositionsByAccountId,
  state => state.sortClosedStockSummary,
  composeSummary,
);

export default func;
