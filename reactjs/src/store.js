import { createStore, combineReducers } from 'redux';
import addModalOpen from './addPosition/addModalOpen';
import addPositionFormData from './addPosition/formData';
import signUpData from './SignUp/data';
import signInData from './SignIn/data';

const reducers = combineReducers({
  addModalOpen,
  addPositionFormData,
  signUpData,
  signInData,
});
export default createStore(reducers);
