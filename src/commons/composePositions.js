import produce from 'immer';

import getDecryptedData from '../encryption/getDecryptedData';
import fillInferredValues from '../position/fillInferredValues';

const composePositions = (state, action) => (
  produce(state, draft => {
    const decrypted = getDecryptedData({ data: action.data });
    const filled = decrypted.map(position => fillInferredValues({ original: position }));
    filled.forEach(f => draft.push(f));
  })
);

export default composePositions;
