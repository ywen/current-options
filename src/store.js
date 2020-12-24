import { createStore, combineReducers } from 'redux';
import addModalOpen from './addPosition/addModalOpen';
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

const reducers = combineReducers({
  addModalOpen,
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
});
export default createStore(reducers);
