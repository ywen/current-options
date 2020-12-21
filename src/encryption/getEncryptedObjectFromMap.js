import getEncrypted from './getEncrypted';
import keyStore from './keyStore';

const getEncryptedObjectFromMap = ({ data, fields }) => {
  const result = {};
  const key = keyStore.fetch();
  fields.forEach((name) => {
    const value = data.get(name);
    const encrypted = getEncrypted({ key, value });
    const encryptedKey = getEncrypted({ key, value: name });
    result[encryptedKey] = encrypted;
  });
  return result;
};

export default getEncryptedObjectFromMap;
