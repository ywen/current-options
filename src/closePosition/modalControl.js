import produce from 'immer';
import createReducer from 'commons/createReducer';

const initialState = {
  closeModal: false,
  position: null,
  data: { closedDate: new Date().toLocaleString() },
};

const openCloseModal = (state, action) => produce(state, draft => {
  draft.isOpen = true;
  draft.position = action.position;
});

const closeCloseModal = (state, action) => produce(state, draft => {
  draft = initialState;
});

const valueChanged = (state, action) => produce(state, draft => {
  draft.data[action.key] = action.value;
});

const modalControl = createReducer({
  initialState,
  handledTypes: [
    { type: 'OPEN_CLOSE_MODAL', logic: openCloseModal },
    { type: 'CLOSE_CLOSE_MODAL', logic: closeCloseModal },
    { type: 'CLOSE_POSITION_VALUE_CHANGED', logic: valueChanged },
  ]
});

export default modalControl;
