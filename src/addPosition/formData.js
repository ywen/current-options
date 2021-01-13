import produce from 'immer';

import createReducer from '../commons/createReducer';
import fillInferredValues from '../position/fillInferredValues';

const initialState = {
  openDate: new Date().toLocaleString(),
};

const addLogic = (state, action) => (
  produce(state, draft => {
    draft[action.key] = action.value;
    draft = fillInferredValues({ original: draft });
  })
);

const reducer = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'ADD_POSITION_VALUE_CHANGED',
      logic: addLogic,
    },
    {
      type: 'ADD_POSITION_CLEAR_FORM_DATA',
      logic: () => initialState,
    },
  ]
});

export default reducer;
