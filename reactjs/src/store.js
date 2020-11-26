import { createStore, combineReducers } from 'redux';
import addModalOpen from './add-position/addModalOpen';

const reducers = combineReducers({
  addModalOpen,
});
export default createStore(reducers);
