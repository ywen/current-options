import produce from 'immer';
import store from 'server/store';

import field from './model';
import getEncryptedObjectFromMap from 'encryption/getEncryptedObjectFromMap';

const close = async ({ position, closedData }) => {
  const metaFields = field.metaFields.concat('accountId');
  const result1 = getEncryptedObjectFromMap({ data: position, fields: metaFields });
  const result2 = getEncryptedObjectFromMap({
    data: closedData,
    fields: field.closingFormFields,
  });
  const newPosition = {
    ...result1,
    ...result2,
    id: position.id,
  };
  if (closedData.quantity === position.quantity) {
    store.closePosition({ position: newPosition });
  } else {
    const reduced = produce(position, draft => {
      draft.quantity = Number(position.quantity) - Number(closedData.quantity);
    });
    const opened = getEncryptedObjectFromMap({ data: reduced, fields: metaFields });
    opened.id = position.id;
    store.partialClosePosition({ closed: newPosition, opened });
  }
};

export default close;
