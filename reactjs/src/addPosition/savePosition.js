import store from '../server/store';
import getEncrypted from '../encryption/getEncrypted';

const savePosition = ({ key, data }) => {
  const result = {};
  ['symbol', 'quantity', 'purchasePrice', 'openDate'].forEach((name) => {
    const value = data.get(name);
    const encrypted = getEncrypted({ key, value });
    result[name] = encrypted;
  });
  store.saveOpenPosition({ position: result });
};

export default savePosition;
