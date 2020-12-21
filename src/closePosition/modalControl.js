import Immutable from 'immutable';

const initializeState = Immutable.fromJS({
  closeModal: false,
  position: null,
  data: { closedDate: new Date().toLocaleString() },
});

const modalControl = (state, action) => {
  if (state === undefined) return initializeState;
  if (action.type === 'OPEN_CLOSE_MODAL') {
    return state.merge({
      isOpen: true,
      position: action.position,
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
