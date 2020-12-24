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
const openPositionsStore = () => toDoc({ name: 'openPositions' });
const closedPositionsStore = () => toDoc({ name: 'closedPositions' });

const getKey = () => keyStore().get();

const setKey = ({ key }) => keyStore().set({ key });

const saveTo = async ({ doc, position }) => {
  const snapshot = await doc().get();
  if (!snapshot.exists) {
    await doc().set({});
  }
  await doc().update({
    [position.id]: position,
  });
};

const saveOpenPosition = async ({ position }) => {
  await saveTo({ doc: openPositionsStore, position });
};

const closePosition = async ({ position }) => {
  const batch = db().batch();
  const openRef = openPositionsStore();
  const closeRef = closedPositionsStore();
  batch.update(openRef, {
    [position.get('id')]: firebase.firestore.FieldValue.delete(),
  });

  const snapshot = await closeRef.get();
  if (!snapshot.exists) {
    batch.set(closeRef, {});
  }
  batch.update(closeRef, {
    [position.get('id')]: position.toJS(),
  });
  return batch.commit();
};

const deletePosition = ({ positionId }) => {
  openPositionsStore().update({
    [positionId]: firebase.firestore.FieldValue.delete(),
  });
};

const publicMethods = {
  closePosition,
  deletePosition,
  getKey,
  openPositionsStore,
  closedPositionsStore,
  saveOpenPosition,
  setKey,
};

export default publicMethods;
