import CryptoJS from 'crypto-js';

const getEncrypted = ({ key, value }) => {
  return CryptoJS.AES.encrypt(String(value), key).toString();
};

export default getEncrypted;
