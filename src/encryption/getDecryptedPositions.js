import getDecrypted from './getDecrypted';
import keyStore from './keyStore';

const getDecryptedPositions = ({ positions }) => {
  const key = keyStore.fetch();
  return positions.map((position) => {
    const decryped = { id: position.id };
    Object.keys(position).forEach((name) => {
      if (name !== 'id') {
        const prop = getDecrypted({ key, value: name });
        decryped[prop] = getDecrypted({ key, value: position[name] });
      }
    });
    return decryped;
  });
};

export default getDecryptedPositions;
