import produce from 'immer';

import createReducer from 'commons/createReducer';

const initialState = {};

const logic = (state, action) => produce(state, draft => {
  const { key, value} = action;
  draft[key] = value;
});

const data = createReducer({
  initialState,
  handledTypes: [
    { type: 'SIGN_IN_VALUE_CHANGED', logic },
  ],
});

export default data;
