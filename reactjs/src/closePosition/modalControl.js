import Immutable from 'immutable';

const initializeState = Immutable.fromJS({
  closeModal: false,
  position: null,
  data: { closeDate: new Date().toLocaleString() },
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
  return state;
};

export default modalControl;
