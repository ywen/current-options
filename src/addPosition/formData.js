import Immutable from 'immutable';

import createReducer from '../commons/createReducer';
import fillInferredValues from '../position/fillInferredValues';

const initialState = Immutable.fromJS({
  openDate: new Date().toLocaleString(),
});

const addLogic = (state, action) => {
  let result = state.set(action.key, action.value);
  result = fillInferredValues({original: result});
  return result;
};

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
