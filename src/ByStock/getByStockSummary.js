import { createSelector } from 'reselect';

import getSummaryFromPositions from '../position/getSummaryFromPositions';

const getByStockSummary = createSelector(
  (state) => state.positions,
  (state) => state.sortByStockConditions,
  (positions, sort) => getSummaryFromPositions({ positions, sort })
);

export default getByStockSummary;
