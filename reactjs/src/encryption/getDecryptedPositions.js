import getDecrypted from './getDecrypted';
import keyStore from './keyStore';

const getDecryptedPositions = ({ positions }) => {
  const key = keyStore.fetch();
  return positions.map((position) => {
    Object.keys(position).forEach((name) => {
      if (name !== 'id') {
        position[name] = getDecrypted({ key, value: position[name] });
      }
    });
    return position;
  });
};

export default getDecryptedPositions;
