import CryptoJS from 'crypto-js';

const getDecrypted = ({ key, value }) => {
  return CryptoJS.AES.decrypt(value, key).toString();
};

export default getDecrypted;

