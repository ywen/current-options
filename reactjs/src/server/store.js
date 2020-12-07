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
const positionsStore = () => toDoc({ name: 'positions' });

const getKey = () => keyStore().get();

const setKey = ({ key }) => keyStore().set({ key });

const saveOpenPosition = async ({ position }) => {
  const snapshot = await positionsStore().get();
  if (!snapshot.exists) {
    positionsStore().set({});
  }
  positionsStore().update({
    openPositions: firebase.firestore.FieldValue.arrayUnion(position),
  });
};

const publicMethods = {
  getKey,
  setKey,
  saveOpenPosition,
};

export default publicMethods;
