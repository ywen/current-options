import Immutable from 'immutable';
import model from '../position/model';
import logic from '../position/sortLogic';
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
