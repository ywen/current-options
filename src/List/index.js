import React from 'react';

import makeSortedPositionSelector from 'position/makeSortedPositionSelector';
import PositionList from 'position/List';
import modelField from 'position/model';

const List = () => {
  const getSorted = makeSortedPositionSelector({
    sortConditionsKind: 'sortConditions',
    positionKind: 'positions',
    withFilterByTime: false,
  });
  const fields = modelField.displayInferredFields.concat(['actions']);
  return (
    <PositionList
      getSortedPositions={getSorted}
      fields={fields}
      hasProfit={false}
    />
  );
};

export default List;
