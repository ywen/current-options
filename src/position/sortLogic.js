import Immutable from 'immutable';

const sortLogic = (state, action) => {
  const currentField = state.get('field');
  const currentDirection = state.get('directionAsc');
  let newDirection = currentDirection;
  if (action.field === currentField) {
    newDirection = !currentDirection;
  }
  return Immutable.fromJS({ field: action.field, directionAsc: newDirection });
};

export default sortLogic;
