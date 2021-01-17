import { createSelector } from 'reselect';

const makeFilterByAccountSelector = ({ positionKind }) => (
  createSelector(
    state => state[positionKind],
    state => state.currentAccountId,
    (positions, currentAccountId) => {
      return positions.filter(p => p.accountId === currentAccountId)
    }
  )
)

export default makeFilterByAccountSelector;
