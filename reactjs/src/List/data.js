import Immutable from 'immutable';

import getDecryptedPositions from '../encryption/getDecryptedPositions';
import fillInferredValues from '../addPosition/fillInferredValues';

const initialState = Immutable.List([]);

const processData = (state, action) => {
  if (!state) return initialState;
  if (action.type === 'POSITION_CHANGED') {
    const decrypted = getDecryptedPositions({ positions: action.data });
    const filled = decrypted.map(position => {
      return fillInferredValues({ original: Immutable.fromJS(position) });
    });
    return Immutable.fromJS(filled);
  }
  return state;
};

export default processData;
