import store from '../server/store';
import getKey from './encryption/getKey';
import getEncrypted from './encryption/getEncrypted';

const setEncryptionKey = async ({ dispatch, password }) => {
  const querySnapshot = await store.getKey();
  if (querySnapshot.exists) {
    console.log(querySnapshot.data());
  } else {
    const key = getKey();
    const encryptedKey = getEncrypted({password, key})
    await store.setKey({ key: encryptedKey })
    dispatch({ type: 'KEY_ADDED', key });
  }
};

export default setEncryptionKey;
