import { createSelector } from 'reselect';
import sortPositions from './sortPositions';
import mergeAccountsToPositions from './mergeAccountsToPositions';

const func = createSelector(
  (state) => state.accounts,
  (state) => state.positions,
  (state) => state.sortConditions,
  (accounts, positions, sortConditions) => {
    const withAccount = mergeAccountsToPositions({ accounts, positions});
    return sortPositions({positions: withAccount, sortConditions})
  },
);

export default func;
