import Immutable from 'immutable';

import model from './model';

import createReducer from '../commons/createReducer';

const initialialState = Immutable.fromJS({
  field: model.metaFields[0],
  directionAsc: true,
});

const logic = (state, action) => {
  const currentField = state.get('field');
  const currentDirection = state.get('directionAsc');
  let newDirection = currentDirection;
  if (action.field === currentField) {
    newDirection = !currentDirection;
  }
  return Immutable.fromJS({ field: action.field, directionAsc: newDirection });
};

const sortReducer = createReducer({
  initialialState,
  handledTypes: [
    {
      type: 'SORT',
      logic,
    }
  ]
});

export default sortReducer;
