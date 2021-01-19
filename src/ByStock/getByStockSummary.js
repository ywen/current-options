import { createSelector } from 'reselect';

import getSummaryFromPositions from '../position/getSummaryFromPositions';
import makeFilterByAccountSelector from 'position/makeFilterByAccountSelector';

const filterByAccountId = makeFilterByAccountSelector({ positionKind: 'closedPositions' });

const getByStockSummary = createSelector(
  filterByAccountId,
  state => state.sortByStockConditions,
  (positions, sort) => getSummaryFromPositions({ positions, sort })
);

export default getByStockSummary;
