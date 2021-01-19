import { createSelector } from 'reselect';
import sortPositions from './sortPositions';
import makeFilterByAccountSelector from './makeFilterByAccountSelector';
import filterByTime from 'ClosedPositions/filterByTime';

const makeSortedPositionSelector = ({ withFilterByTime, positionKind, sortConditionsKind }) => {
  const filter = withFilterByTime ? filterByTime : makeFilterByAccountSelector({ positionKind });
  return createSelector(
    filter,
    (state) => state[sortConditionsKind],
    (positions, sortConditions) => {
      return sortPositions({positions, sortConditions})
    },
  );
}

export default makeSortedPositionSelector;
