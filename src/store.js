import { createStore, combineReducers } from 'redux';
import accountModalOpen from './Accounts/modalOpenReducer';
import accounts from './Accounts/fromServer';
import currentAccountId from './Accounts/currentAccount';
import closeModal from './closePosition/modalControl';
import addPositionFormData from './addPosition/formData';
import addAccountData from './Accounts/dataReducer';
import signUpData from './SignUp/data';
import signInData from './SignIn/data';
import positions from './position/allPositionsReducer';
import closedPositions from './ClosedPositions/data';
import currentTab from './Tabs/currentTab';
import sortConditions from './List/sortReducer';
import sortByStockConditions from './ByStock/sortReducer';
import sortClosedStockSummary from './ClosedPositions/Summary/sortReducer';
import sortExpirationView from './expiration/sortReducer';
import closedPositionsFilter from './ClosedPositions/timeFilterChangeReducer';

const reducers = combineReducers({
  accounts,
  accountModalOpen,
  addAccountData,
  addPositionFormData,
  closeModal,
  closedPositions,
  closedPositionsFilter,
  currentAccountId,
  currentTab,
  positions,
  signInData,
  signUpData,
  sortByStockConditions,
  sortClosedStockSummary,
  sortConditions,
  sortExpirationView,
});

export default createStore(reducers)
