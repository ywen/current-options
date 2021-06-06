import { createSelector } from 'reselect';

const makeFilterByAccountSelector = ({ positionKind }) => (
  createSelector(
    state => state[positionKind],
    state => state.currentAccountId,
    (positions, currentAccountId) => {
      if (currentAccountId === 'all') return positions;
      return positions.filter(p => p.accountId === currentAccountId)
    }
  )
)

export default makeFilterByAccountSelector;
