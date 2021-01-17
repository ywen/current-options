import React from 'react';

import makeSortedPositionSelector from 'position/makeSortedPositionSelector';
import PositionList from 'position/List';
import modelField from 'position/model';

const closeButton = ({ s, dispatch }) => (
  <td key={`td-${s.id}-closeButton`} className='list__td'>
    <button
      className='list__action-button'
      key='list__close-button'
      onClick={ () => dispatch({ type: 'OPEN_CLOSE_MODAL', position: s }) }
    >
      Close
    </button>
  </td>
);

const List = () => {
  const getSorted = makeSortedPositionSelector({
    sortConditionsKind: 'sortConditions',
    positionKind: 'positions',
  });
  const fields = modelField.displayInferredFields.concat(['closeButton']);
  return (
    <PositionList
      getSortedPositions={getSorted}
      fields={fields}
      extra = { { closeButton } }
    />
  );
};

export default List;
