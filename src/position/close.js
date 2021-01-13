import store from 'server/store';

import field from './model';
import getEncryptedObjectFromMap from 'encryption/getEncryptedObjectFromMap';

const close = async ({ position, closedData }) => {
  const result1 = getEncryptedObjectFromMap({ data: position, fields: field.metaFields.concat('accountId') });
  const result2 = getEncryptedObjectFromMap({
    data: closedData,
    fields: field.closedFields,
  });
  const newPosition = {
    ...result1,
    ...result2,
    id: position.id,
  };
  store.closePosition({ position: newPosition });
};

export default close;
