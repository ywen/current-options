import { createStore, combineReducers } from 'redux';
import addModalOpen from './addPosition/addModalOpen';
import addPositionFormData from './addPosition/formData';
import signUpData from './SignUp/data';
import signInData from './SignIn/data';
import positions from './List/data';
import currentTab from './Tabs/currentTab';

const reducers = combineReducers({
  addModalOpen,
  addPositionFormData,
  currentTab,
  signUpData,
  signInData,
  positions,
});
export default createStore(reducers);
