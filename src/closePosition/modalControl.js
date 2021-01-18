import produce from 'immer';
import createReducer from 'commons/createReducer';

import formatDate from 'commons/formatDate';
import model from 'position/model';

const initialState = {
  closeModal: false,
  position: null,
  data: {},
};

const now = () => new Date(Date.now());

const openCloseModal = (state, action) => produce(state, draft => {
  draft.isOpen = true;
  draft.position = action.position;
  draft.allFilled = false;
  draft.data = { closedDate: formatDate(now()), quantity: action.position.quantity };
});

const closeCloseModal = (state, action) => produce(state, draft => initialState);

const valueChanged = (state, action) => produce(state, draft => {
  draft.data[action.key] = action.value;
  draft.allFilled = true;
  model.closingFormFields.forEach(k => {
    if (draft.data[k].length < 1) draft.allFilled = false;
  })
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
