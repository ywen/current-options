import makeSortedPositionSelector from 'position/makeSortedPositionSelector';
import PositionList from 'position/List';
import modelField from 'position/model';

const List = () => {
  const getSorted = makeSortedPositionSelector({
    sortConditionsKind: 'sortConditions',
    positionKind: 'closedPositions',
    withFilterByTime: true,
  });
  const fields = modelField.displayClosedPositionsFields.concat('actions');
  return (
    <PositionList
      getSortedPositions={getSorted}
      fields={fields}
      withFilterByTime={true}
      hasProfit={true}
    />
  );
};

export default List;
