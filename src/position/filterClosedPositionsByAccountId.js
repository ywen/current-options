import { createSelector } from 'reselect';

const filter = createSelector(
  state => state.closedPositions,
  state => state.currentAccountId,
  (positions, currentAccountId) => positions.filter(p => p.get('accountId') === currentAccountId)
);

export default filter;

