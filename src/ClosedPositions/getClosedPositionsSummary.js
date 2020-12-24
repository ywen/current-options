import { createSelector } from 'reselect';

import getSummaryFromPositions from '../position/getSummaryFromPositions';

const composeSummary = (positions, sort) => getSummaryFromPositions({ positions, sort });

const func = createSelector(
  state => state.closedPositions,
  state => state.sortClosedStockSummary,
  composeSummary,
);

export default func;
