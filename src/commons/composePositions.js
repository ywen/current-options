import Immutable from 'immutable';

import getDecryptedPositions from '../encryption/getDecryptedPositions';
import fillInferredValues from '../position/fillInferredValues';

const composePositions = (state, action) => {
  const decrypted = getDecryptedPositions({ positions: action.data });
  const filled = decrypted.map(position => {
    return fillInferredValues({ original: Immutable.fromJS(position) });
  });
  return Immutable.fromJS(filled);
};

export default composePositions;
