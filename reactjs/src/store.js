import { createStore, combineReducers } from 'redux';
import addModalOpen from './addPosition/addModalOpen';
import addPositionFormData from './addPosition/formData';

const reducers = combineReducers({
  addModalOpen,
  addPositionFormData,
});
export default createStore(reducers);
