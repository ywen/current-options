import { createStore, combineReducers } from 'redux';
import addModalOpen from './addPosition/addModalOpen';
import addPositionFormData from './addPosition/formData';
import signUpData from './SignUp/data';
import signInData from './SignIn/data';
import key from './encryption/store';

const reducers = combineReducers({
  addModalOpen,
  addPositionFormData,
  signUpData,
  signInData,
  key,
});
export default createStore(reducers);
