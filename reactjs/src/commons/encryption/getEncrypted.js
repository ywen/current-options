import CryptoJS from 'crypto-js';

const encryptKey = ({ password, key }) => {
  return CryptoJS.AES.encrypt(key, password).toString();
};

export default encryptKey;
