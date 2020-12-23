import { createSelector } from 'reselect';
import Immutable from 'immutable';

import getSummaryFromPositions from '../position/getSummaryFromPositions';

const composeSummary = (positions) => getSummaryFromPositions({ positions, sort: Immutable.fromJS({})});

const func = createSelector(
  state => state.closedPositions,
  composeSummary,
);

export default func;
