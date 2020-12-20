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

const getKey = () => keyStore().get();

const setKey = ({ key }) => keyStore().set({ key });

const saveTo = async ({ fieldName, position }) => {
  const snapshot = await openPositionsStore().get();
  if (!snapshot.exists) {
    await openPositionsStore().set({});
  }
  await openPositionsStore().update({
    [position.id]: position,
  });
};

const saveOpenPosition = async ({ position }) => {
  await saveTo({ fieldName: 'open', position });
};

const saveClosePosition = async ({ position }) => {
  await saveTo({ fieldName: 'closed' });
};

const getOpenOptionsFromData = ({ doc }) => {
  const positions = doc.data();
  console.log(positions);
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
  setKey,
  saveOpenPosition,
  saveClosePosition,
  openPositionsStore,
  getOpenOptionsFromData,
};

export default publicMethods;
