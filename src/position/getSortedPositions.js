import { createSelector } from 'reselect';
import sortPositions from './sortPositions';
import filterByCurrentAccountId from './filterByCurrentAccountId';

const func = createSelector(
  filterByCurrentAccountId,
  (state) => state.sortConditions,
  (positions, sortConditions) => {
    return sortPositions({positions, sortConditions})
  },
);

export default func;
