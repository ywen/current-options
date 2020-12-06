import CryptoJS from 'crypto-js';

const getDecrypted = ({ password, key }) => {
  return CryptoJS.AES.decrypt(key, password).toString();
};

export default getDecrypted;

