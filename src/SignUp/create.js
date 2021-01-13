import auth from '../server/auth';
import setEncryptionKey from '../encryption/setEncryptionKey';

const create = ({ data, dispatch, navigate }) => {
  const { email, password } = data;
  auth().createUserWithEmailAndPassword(email, password).then(user => {
    setEncryptionKey({ dispatch, password });
    navigate('/');
  });
}

export default create;
