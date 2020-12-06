import auth from '../server/auth';

const create = ({ data, dispatch }) => {
  const email = data.get('email');
  const password = data.get('password');
  auth().createUserWithEmailAndPassword(email, password);
}

export default create;
