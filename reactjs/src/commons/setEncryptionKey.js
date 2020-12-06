import firebase from 'firebase/app';
import auth from '../firebase/auth';
import 'firebase/firestore';

import getKey from './encryption/getKey';
import getEncrypted from './encryption/getEncrypted';

const setEncryptionKey = ({ dispatch, password }) => {
  const userId = auth().currentUser.uid;
  const db = firebase.firestore();
  db.collection(userId).doc('key').get().then((querySnapshot) => {
    if (querySnapshot.exists) {
      console.log(querySnapshot.data());
    } else {
      const key = getKey();
      const encryptedKey = getEncrypted({password, key})
      db.collection(userId).doc("key").set({
        key: encryptedKey,
      }).then(() => {
        dispatch({ type: 'KEY_ADDED', key })
      });
    }
  });
};

export default setEncryptionKey;
