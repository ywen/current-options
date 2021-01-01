import { v4 as uuidv4 } from 'uuid';

import getEncryptedObjectFromMap from '../encryption/getEncryptedObjectFromMap';
import store from '../server/store';

const savePosition = ({ data }) => {
  const account = getEncryptedObjectFromMap({ data, fields: ['name'] });
  account.id = uuidv4();
  store.saveAccount({ account });
};

export default savePosition;
