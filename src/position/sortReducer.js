import Immutable from 'immutable';
import model from './model';
import logic from './sortLogic';
import createReducer from '../commons/createReducer';

const initialialState = Immutable.fromJS({
  field: model.metaFields[0],
  directionAsc: true,
});

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
