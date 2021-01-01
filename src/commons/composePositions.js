import Immutable from 'immutable';

import getDecryptedData from '../encryption/getDecryptedData';
import fillInferredValues from '../position/fillInferredValues';

const composePositions = (state, action) => {
  const decrypted = getDecryptedData({ data: action.data });
  const filled = decrypted.map(position => {
    return fillInferredValues({ original: Immutable.fromJS(position) });
  });
  return Immutable.fromJS(filled);
};

export default composePositions;
