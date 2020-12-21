import Immutable from 'immutable';

const initialialState = Immutable.fromJS({});

const sortReducer = (state, action) => {
  if (!state) return initialialState;
  if (action.type === 'SORT') {
    const currentField = state.get('field') || '';
    const currentDirection = state.get('directionAsc') || true;
    let newDirection = currentDirection;
    if (action.field === currentField) {
      newDirection = !currentDirection;
    }
    return Immutable.fromJS({ field: action.field, directionAsc: newDirection });
  }
  return state;
};

export default sortReducer;
