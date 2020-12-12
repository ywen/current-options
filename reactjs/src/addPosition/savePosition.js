import store from '../server/store';
import getEncrypted from '../encryption/getEncrypted';
import keyStore from '../encryption/keyStore';

const savePosition = ({ data }) => {
  const result = {};
  const key = keyStore.fetch();
  ['symbol', 'quantity', 'purchasePrice', 'openDate'].forEach((name) => {
    const value = data.get(name);
    const encrypted = getEncrypted({ key, value });
    result[name] = encrypted;
  });
  store.saveOpenPosition({ position: result });
};

export default savePosition;
