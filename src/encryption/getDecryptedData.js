import getDecrypted from './getDecrypted';
import keyStore from './keyStore';

const getDecryptedData = ({ data }) => {
  const key = keyStore.fetch();
  return data.map((object) => {
    const decrypted = { id: object.id };
    Object.keys(object).forEach((name) => {
      if (name !== 'id') {
        const prop = getDecrypted({ key, value: name });
        decrypted[prop] = getDecrypted({ key, value: object[name] });
      }
    });
    return decrypted;
  });
};

export default getDecryptedData;
