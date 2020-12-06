import auth from '../server/auth';

import history from '../commons/history';
import setEncryptionKey from '../encryption/setEncryptionKey';

const action = ({ dispatch, data }) => {
  const email = data.get('email');
  const password = data.get('password');
  auth().signInWithEmailAndPassword(email, password).then((user) => {
    dispatch({ type: 'USER_SIGNED_IN', user });
    setEncryptionKey({ dispatch, password });
    history.push('/');
  }).catch((error) => {
    console.error(error);
  });
}

export default action;
