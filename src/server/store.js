import firebase from 'firebase/app';
import 'firebase/firestore';

import currentUser from './currentUser';

const db = () => firebase.firestore();
const collection = () => {
  const userId = currentUser().uid;
  return db().collection(userId);
};

const toDoc = ({ name }) => collection().doc(name);
const keyStore = () => toDoc({ name: 'key '});
const openPositionsStore = () => toDoc({ name: 'openPositions' });
const openPositionsBackupStore = () => toDoc({ name: 'openPositionsBackup' });
const closedPositionsStore = () => toDoc({ name: 'closedPositions' });
const closedPositionsBackupStore = () => toDoc({ name: 'closedPositionsBackup' });
const accountsStore = () => toDoc({ name: 'accounts' });
const accountsBackupStore = () => toDoc({ name: 'accountsBackup' });

const getKey = () => keyStore().get();

const setKey = ({ key }) => keyStore().set({ key });

const saveTo = async ({ doc, data }) => {
  const snapshot = await doc().get();
  if (!snapshot.exists) {
    await doc().set({});
  }
  await doc().update({
    [data.id]: data,
  });
};

const saveOpenPosition = async ({ position }) => {
  await saveTo({ doc: openPositionsStore, data: position });
};
const saveClosedPosition = async ({ position }) => {
  await saveTo({ doc: closedPositionsStore, data: position });
};

const saveAccount = async ({ account }) => {
  await saveTo({ doc: accountsStore, data: account });
};

const closePosition = async ({ position }) => {
  const batch = db().batch();
  const openRef = openPositionsStore();
  const closeRef = closedPositionsStore();
  batch.update(openRef, {
    [position.id]: firebase.firestore.FieldValue.delete(),
  });

  const snapshot = await closeRef.get();
  if (!snapshot.exists) {
    batch.set(closeRef, {});
  }
  batch.update(closeRef, {
    [position.id]: position,
  });
  return batch.commit();
};

const deletePosition = ({ positionId }) => {
  openPositionsStore().update({
    [positionId]: firebase.firestore.FieldValue.delete(),
  });
};

const publicMethods = {
  accountsStore,
  accountsBackupStore,
  closePosition,
  closedPositionsStore,
  closedPositionsBackupStore,
  deletePosition,
  getKey,
  openPositionsStore,
  openPositionsBackupStore,
  saveAccount,
  saveClosedPosition,
  saveOpenPosition,
  setKey,
};

export default publicMethods;
