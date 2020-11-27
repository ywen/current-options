import Immutable from 'immutable';

import fillInferredValues from './fillInferredValues';

const initialState = Immutable.fromJS({
  openDate: new Date().toLocaleString(),
});

const formData = (state, action) => {
  if (state === undefined) return initialState;
  if (action.type === 'ADD_POSITION_VALUE_CHANGED') {
    let result = state.set(action.key, action.value);
    result = fillInferredValues({original: result});
    return result;
  }
  if (action.type === 'ADD_POSITION_CLEAR_FORM_DATA') {
    return initialState;
  }
  return state;
};

export default formData;
