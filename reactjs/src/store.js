import { createStore, combineReducers } from 'redux';
import addModalOpen from './addPosition/addModalOpen';
import addPositionFormData from './addPosition/formData';
import signUpData from './SignUp/data';
import user from './users/user';

const reducers = combineReducers({
  addModalOpen,
  addPositionFormData,
  signUpData,
  user,
});
export default createStore(reducers);
