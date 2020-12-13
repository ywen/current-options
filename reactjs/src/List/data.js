import Immutable from 'immutable';

import getDecryptedPositions from '../encryption/getDecryptedPositions';

const initialState = Immutable.List([]);

const processData = (state, action) => {
  if (!state) return initialState;
  if (action.type === 'POSITION_CHANGED') {
    if (!action.data) {
      return initialState;
    }
    const decrypted = getDecryptedPositions({ positions: action.data.open });
    return Immutable.fromJS(decrypted);
  }
  return state;
};

export default processData;
