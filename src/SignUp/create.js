import auth from '../server/auth';
import setEncryptionKey from '../encryption/setEncryptionKey';
import history from '../commons/history';

const create = ({ data, dispatch }) => {
  const email = data.get('email');
  const password = data.get('password');
  auth().createUserWithEmailAndPassword(email, password).then(user => {
    setEncryptionKey({ dispatch, password });
    history.push('/');
  });
}

export default create;
