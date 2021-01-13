import produce from 'immer';

import createReducer from 'commons/createReducer';

const initialState = {};

const logic = (state, action) => produce(state, draft => {
  const { key, value} = action;
  draft[key] = value;
});

const reducer = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'SIGN_UP_VALUE_CHANGED',
      logic,
    }
  ]
});

export default reducer;
