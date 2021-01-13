import { createSelector } from 'reselect';
const filter = createSelector(
  state => state.positions,
  state => state.currentAccountId,
  (positions, currentAccountId) => {
    return positions.filter(p => p.accountId === currentAccountId)
  }
);

export default filter;
