import React from 'react';

import makeSortedPositionSelector from 'position/makeSortedPositionSelector';
import PositionList from 'position/List';

const List = () => {
  const getSorted = makeSortedPositionSelector({
    sortConditionsKind: 'sortConditions',
    positionKind: 'positions',
  });
  return <PositionList getSortedPositions={getSorted} />
};

export default List;
