import { createStore, combineReducers } from 'redux';
import addPositionModalOpen from './addPosition/addModalOpen';
import accountModalOpen from './Account/modalOpenReducer';
import closeModal from './closePosition/modalControl';
import addPositionFormData from './addPosition/formData';
import signUpData from './SignUp/data';
import signInData from './SignIn/data';
import positions from './List/data';
import closedPositions from './ClosedPositions/data';
import currentTab from './Tabs/currentTab';
import sortConditions from './List/sortReducer';
import sortByStockConditions from './ByStock/sortReducer';
import sortClosedStockSummary from './ClosedPositions/sortReducer';
import sortExpirationView from './expiration/sortReducer';

const reducers = combineReducers({
  accountModalOpen,
  addPositionModalOpen,
  addPositionFormData,
  closeModal,
  closedPositions,
  currentTab,
  positions,
  signInData,
  signUpData,
  sortByStockConditions,
  sortClosedStockSummary,
  sortConditions,
  sortExpirationView,
});
export default createStore(reducers);
