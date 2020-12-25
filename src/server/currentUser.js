import auth from './auth';

const currentUser = () => auth().currentUser;

export default currentUser;
