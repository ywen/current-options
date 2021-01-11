const initialState = false;

const addModalOpen = (state, action) => {
  if (state === undefined) return initialState;
  if (action.type === 'OPEN_POSITION_FORM_MODAL') {
    return true;
  }
  if (action.type === 'CLOSE_POSITION_FORM_MODAL') {
    return false;
  }
  return state;
};

export default addModalOpen;
