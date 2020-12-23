import { createSelector } from 'reselect';
import sortPositions from './sortPositions';

const func = createSelector(
  (state) => state.positions,
  (state) => state.sortConditions,
  (positions, sortConditions) => sortPositions({positions, sortConditions}),
);

export default func;
