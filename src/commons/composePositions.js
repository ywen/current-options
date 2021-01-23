import produce from 'immer';

import getDecryptedData from 'encryption/getDecryptedData';
import fillInferredValues from 'position/inferredValues/fillInferredValues';

const composePositions = (state, action) => (
  produce(state, draft => {
    const decrypted = getDecryptedData({ data: action.data });
    return decrypted.map(position => fillInferredValues({ original: position }));
  })
);

export default composePositions;
