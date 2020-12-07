import store from '../server/store';
import getKey from './getKey';
import getEncrypted from './getEncrypted';
import getDecrypted from './getDecrypted';

const setEncryptionKey = async ({ dispatch, password }) => {
  const querySnapshot = await store.getKey();
  if (querySnapshot.exists) {
    const key = getDecrypted({ value: querySnapshot.data().key, key: password });
    dispatch({ type: 'KEY_ADDED', key });
  } else {
    const key = getKey();
    const encryptedKey = getEncrypted({ key: password, value: key })
    await store.setKey({ key: encryptedKey })
    dispatch({ type: 'KEY_ADDED', key });
  }
};

export default setEncryptionKey;
