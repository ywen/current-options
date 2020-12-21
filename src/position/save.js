import { v4 as uuidv4 } from 'uuid';

import getEncryptedObjectFromMap from '../encryption/getEncryptedObjectFromMap';
import store from '../server/store';
import field from './model';

const savePosition = ({ data }) => {
  const result = getEncryptedObjectFromMap({ data, fields: field.metaFields });
  result.id = uuidv4();
  store.saveOpenPosition({ position: result });
};

export default savePosition;