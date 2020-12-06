import firebase from 'firebase/app';
import 'firebase/firestore';

import auth from './auth';

const db = () => firebase.firestore();
const keyStore = () => {
  const userId = auth().currentUser.uid;
  return db().collection(userId).doc('key');
};

const getKey = () => keyStore().get();

const setKey = ({ key }) => keyStore().set({ key });

export default {
  getKey,
  setKey,
};
