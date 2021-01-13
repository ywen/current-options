import auth from '../server/auth';

import setEncryptionKey from '../encryption/setEncryptionKey';

const action = ({ navigate, dispatch, data }) => {
  const { email, password } = data;
  auth().signInWithEmailAndPassword(email, password).then((user) => {
    setEncryptionKey({ dispatch, password });
    navigate('/');
  }).catch((error) => {
    console.error(error);
  });
}

export default action;
