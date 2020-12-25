import auth from '../server/auth';
import setEncryptionKey from '../encryption/setEncryptionKey';

const create = ({ data, dispatch, navigate }) => {
  const email = data.get('email');
  const password = data.get('password');
  auth().createUserWithEmailAndPassword(email, password).then(user => {
    setEncryptionKey({ dispatch, password });
    navigate('/');
  });
}

export default create;
