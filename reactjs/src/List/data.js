import Immutable from 'immutable';

import getDecryptedPositions from '../encryption/getDecryptedPositions';

const initialState = Immutable.List([]);

const processData = (state, action) => {
  console.log(state)
  if (!state) return initialState;
  if (action.type === 'POSITION_CHANGED') {
    const decrypted = getDecryptedPositions({positions: action.data.openPositions});
    return Immutable.fromJS(decrypted);
  }
  return state;
};

export default processData;
