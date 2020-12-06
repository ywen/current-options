import CryptoJS from 'crypto-js';

const getEncrypted = ({ password, key }) => {
  return CryptoJS.AES.encrypt(key, password).toString();
};

export default getEncrypted;
