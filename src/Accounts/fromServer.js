import produce from 'immer';

import createReducer from '../commons/createReducer';
import getDecryptedData from '../encryption/getDecryptedData';

const initialState = [];

const logic = (state, action) => (
  produce(state, draft => {
    const list = getDecryptedData({ data: action.data });
    list.forEach(k => {
      draft[k.id] = k;
    });
  })
);

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
