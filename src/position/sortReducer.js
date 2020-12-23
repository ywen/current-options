import Immutable from 'immutable';
import model from './model';
import logic from './sortLogic';
import createReducer from '../commons/createReducer';

const initialState = Immutable.fromJS({
  field: model.metaFields[0],
  directionAsc: true,
});

const sortReducer = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'SORT',
      logic,
    }
  ]
});

export default sortReducer;
