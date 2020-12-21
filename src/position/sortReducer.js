import Immutable from 'immutable';

import model from './model';

const initialialState = Immutable.fromJS({
  field: model.metaFields[0],
  directionAsc: true,
});

const sortReducer = (state, action) => {
  if (!state) return initialialState;
  if (action.type === 'SORT') {
    const currentField = state.get('field');
    const currentDirection = state.get('directionAsc');
    let newDirection = currentDirection;
    if (action.field === currentField) {
      newDirection = !currentDirection;
    }
    return Immutable.fromJS({ field: action.field, directionAsc: newDirection });
  }
  return state;
};

export default sortReducer;
