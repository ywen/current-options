import { v4 as uuidv4 } from 'uuid';

import store from '../server/store';
import getEncrypted from '../encryption/getEncrypted';
import keyStore from '../encryption/keyStore';
import field from './model';

const close = ({ position, closedData }) => {
  store.removeOpenPosition({ position });
  const result = {};
  const key = keyStore.fetch();
  field.metaFields.forEach((name) => {
    const value = position.get(name);
    const encrypted = getEncrypted({ key, value });
    result[name] = encrypted;
  });
  field.closedFields.forEach((name) => {
    const value = closedData.get(name);
    const encrypted = getEncrypted({ key, value });
    result[name] = encrypted;
  });
  store.saveClosedPosition({ position: result });
};

export default close;
