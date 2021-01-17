import { createSelector } from 'reselect';
import sortPositions from './sortPositions';
import makeFilterByAccountSelector from './makeFilterByAccountSelector';

const makeSortedPositionSelector = ({ positionKind, sortConditionsKind }) => {
  const filterSelector = makeFilterByAccountSelector({ positionKind });
  return createSelector(
    filterSelector,
    (state) => state[sortConditionsKind],
    (positions, sortConditions) => {
      return sortPositions({positions, sortConditions})
    },
  );
}

export default makeSortedPositionSelector;
