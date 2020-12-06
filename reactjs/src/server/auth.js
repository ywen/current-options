import firebase from 'firebase/app';
import 'firebase/auth';

import app from './init';

const auth = () => {
  app();
  return firebase.auth();
};

export default auth;
