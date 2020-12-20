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

const removeOpenPosition = async ({ position }) => {
  await openPositionsStore().update({
    [position.get('id')]: firebase.firestore.FieldValue.delete()
  });
};

const saveOpenPosition = async ({ position }) => {
  await saveTo({ doc: openPositionsStore, position });
};

const saveClosedPosition = async ({ position }) => {
  await saveTo({ doc: closedPositionsStore, position });
};

const getOpenOptionsFromData = ({ doc }) => {
  const positions = doc.data();
  if (!positions) {
    return [];
  }
  const result = [];
  Object.keys(positions).forEach((key) => {
    result.push(positions[key]);
  });
  return result;
};

const publicMethods = {
  getKey,
  getOpenOptionsFromData,
  openPositionsStore,
  removeOpenPosition,
  saveClosedPosition,
  saveOpenPosition,
  setKey,
};

export default publicMethods;
