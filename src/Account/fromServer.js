import Immutable from 'immutable';

import createReducer from '../commons/createReducer';
import getDecryptedData from '../encryption/getDecryptedData';

const initialState = Immutable.List([]);

const logic = (state, action) => {
  const list = Immutable.fromJS(getDecryptedData({ data: action.data }));
  let result = Immutable.fromJS({});
  list.forEach(k => {
    result = result.set(k.get('id'), k);
  });
  return result;
};

const processData = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'ACCOUNTS_CHANGED',
      logic,
    }
  ]
});

export default processData;
