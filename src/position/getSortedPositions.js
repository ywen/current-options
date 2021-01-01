import { createSelector } from 'reselect';
import sortPositions from './sortPositions';
import filterByCurrentAccountId from './filterByCurrentAccountId';

const func = createSelector(
  filterByCurrentAccountId,
  (state) => state.sortConditions,
  (state) => state.currentAccountId,
  (positions, sortConditions, currentAccountId) => {
    return sortPositions({positions, sortConditions})
  },
);

export default func;
