import store from '../server/store';

import field from './model';
import getEncryptedObjectFromMap from '../encryption/getEncryptedObjectFromMap';

const close = async ({ position, closedData }) => {
  await store.removeOpenPosition({ position });
  const result1 = getEncryptedObjectFromMap({ data: position, fields: field.metaFields });
  const result2 = getEncryptedObjectFromMap({
    data: closedData,
    fields: field.closedFields,
  });
  store.saveClosedPosition({
    position: Object.assign(result1, result2, { id: position.get('id')})
  });
};

export default close;
