import getDecryptedData from '../encryption/getDecryptedData';
import fillInferredValues from '../position/fillInferredValues';

const composePositions = (state, action) => {
  const decrypted = getDecryptedData({ data: action.data });
  return decrypted.map(position => fillInferredValues({ original: position }));
};

export default composePositions;
