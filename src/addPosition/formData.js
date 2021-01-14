import produce from 'immer';

import createReducer from '../commons/createReducer';
import fillInferredValues from '../position/fillInferredValues';
import formatDate from 'commons/formatDate';

const initialState = {};

const addLogic = (state, action) => (
  produce(state, draft => {
    const original = draft.data;
    original[action.key] = action.value;
    draft.data = fillInferredValues({ original });
  })
);

const open = (state, action) => (
  produce(state, draft => {
    draft.open = true;
    draft.data = {};
    draft.data.openDate = formatDate(new Date(Date.now()));
  })
);

const close = (state, action) => (
  produce(state, draft => {
    draft.open = false;
  })
)

const reducer = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'ADD_POSITION_VALUE_CHANGED',
      logic: addLogic,
    },
    {
      type: 'OPEN_POSITION_FORM_MODAL',
      logic: open,
    },
    {
      type: 'CLOSE_POSITION_FORM_MODAL',
      logic: close,
    },
  ]
});

export default reducer;
