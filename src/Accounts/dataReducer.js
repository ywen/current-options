import createReducer from '../commons/createReducer';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

const reducer = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'ADD_ACCOUNT_VALUE_CHANGED',
      logic: (state, action) => state.set(action.key, action.value),
    },
  ]
});

export default reducer;
