import produce from 'immer';
import createReducer from 'commons/createReducer';

import formatDate from 'commons/formatDate';

const initialState = {
  closeModal: false,
  position: null,
  data: {},
};

const now = () => new Date(Date.now());

const openCloseModal = (state, action) => produce(state, draft => {
  draft.isOpen = true;
  draft.position = action.position;
  draft.data = { closedDate: formatDate(now()) };
});

const closeCloseModal = (state, action) => produce(state, draft => initialState);

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
