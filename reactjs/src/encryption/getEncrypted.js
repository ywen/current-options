import CryptoJS from 'crypto-js';

const getEncrypted = ({ key, value }) => {
  return CryptoJS.AES.encrypt(value, key).toString();
};

export default getEncrypted;
