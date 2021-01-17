import { v4 as uuidv4 } from 'uuid';

import getEncryptedObjectFromMap from '../encryption/getEncryptedObjectFromMap';
import store from 'server/store';
import model from 'position/model';

const savePosition = ({ data }) => {
  const isClosed = model.isClosed({ data });
  let fields = model.metaFields.concat('accountId');
  if (isClosed) {
    fields = fields.concat(model.closedFields);
  }
  const result = getEncryptedObjectFromMap({ data, fields });
  result.id = data.id ? data.id : uuidv4();
  if (model.isClosed({ data })) {
    store.saveClosedPosition({ position: result });
  } else {
    store.saveOpenPosition({ position: result });
  }
};

export default savePosition;
