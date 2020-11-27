import { createStore, combineReducers } from 'redux';
import addModalOpen from './add-position/addModalOpen';
import addPositionFormData from './add-position/formData';

const reducers = combineReducers({
  addModalOpen,
  addPositionFormData,
});
export default createStore(reducers);
