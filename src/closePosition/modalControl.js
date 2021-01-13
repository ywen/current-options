import Immutable from 'immutable';
import formatDate from 'commons/formatDate';

const now = () => new Date(Date.now());
const initializeState = Immutable.fromJS({
  closeModal: false,
  position: null,
  data: {},
});

const modalControl = (state, action) => {
  if (state === undefined) return initializeState;
  if (action.type === 'OPEN_CLOSE_MODAL') {
    const newDate = formatDate({ date: now() });
    const newData = state.get('data').set('closedDate', newDate);
    return state.merge({
      isOpen: true,
      position: action.position,
      data: newData,
    });
  }
  if (action.type === 'CLOSE_CLOSE_MODAL') {
    return initializeState;
  }
  if (action.type === 'CLOSE_POSITION_VALUE_CHANGED') {
    const data = state.get('data');
    const newData = data.merge({
      [action.key]: action.value,
    })
    return state.merge({
      data: newData,
    });
  }
  return state;
};

export default modalControl;
