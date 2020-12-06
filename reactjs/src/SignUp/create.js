import auth from '../server/auth';

const create = ({ data, dispatch }) => {
  const email = data.get('email');
  const password = data.get('password');
  auth().createUserWithEmailAndPassword(email, password).then((user) => {
    dispatch({ type: 'USER_SIGNED_IN', user });
  }).catch((error) => {
    console.error(error);
  });
}

export default create;
