import { createSelector } from 'reselect';

const filter = createSelector(
  state => state.closedPositions,
  state => state.currentAccountId,
  (positions, currentAccountId) => positions.filter(p => p.accountId === currentAccountId)
);

export default filter;

