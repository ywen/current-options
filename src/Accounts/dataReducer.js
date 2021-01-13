import produce from 'immer';
import createReducer from '../commons/createReducer';

const initialState = {};

const reducer = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'ADD_ACCOUNT_VALUE_CHANGED',
      logic: (state, action) => produce(state, draft => draft[action.ke] = action.value),
    },
  ]
});

export default reducer;
