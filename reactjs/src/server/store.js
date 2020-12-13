import firebase from 'firebase/app';
import 'firebase/firestore';

import auth from './auth';

const db = () => firebase.firestore();
const collection = () => {
  const userId = auth().currentUser.uid;
  return db().collection(userId);
};

const toDoc = ({ name }) => collection().doc(name);
const keyStore = () => toDoc({ name: 'key '});
const openPositionsStore = () => toDoc({ name: 'positions' });

const getKey = () => keyStore().get();

const setKey = ({ key }) => keyStore().set({ key });

const saveOpenPosition = async ({ position }) => {
  const snapshot = await openPositionsStore().get();
  if (!snapshot.exists) {
    openPositionsStore().set({});
  }
  openPositionsStore().update({
    open: firebase.firestore.FieldValue.arrayUnion(position),
  });
};

const publicMethods = {
  getKey,
  setKey,
  saveOpenPosition,
  openPositionsStore,
};

export default publicMethods;
