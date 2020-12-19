import { v4 as uuidv4 } from 'uuid';

import store from '../server/store';
import getEncrypted from '../encryption/getEncrypted';
import keyStore from '../encryption/keyStore';
import field from './model';

const savePosition = ({ data }) => {
  const result = { id: uuidv4() };
  const key = keyStore.fetch();
  field.metaFields.forEach((name) => {
    const value = data.get(name);
    const encrypted = getEncrypted({ key, value });
    result[name] = encrypted;
  });
  store.saveOpenPosition({ position: result });
};

export default savePosition;
