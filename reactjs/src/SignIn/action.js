import firebase from 'firebase/app';
import 'firebase/auth';

import history from '../commons/history';
import setEncryptionKey from '../commons/setEncryptionKey';

const action = ({ dispatch, data }) => {
  const email = data.get('email');
  const password = data.get('password');
  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    dispatch({ type: 'USER_SIGNED_IN', user });
    setEncryptionKey({ dispatch, password });
    history.push('/');
  }).catch((error) => {
    console.error(error);
  });
}

export default action;
