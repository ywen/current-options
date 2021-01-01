import createReducer from '../commons/createReducer';

const initialState = false;

const reducer = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'OPEN_ADD_ACCOUNT_MODAL',
      logic: (state, action) => true,
    },
    {
      type: 'CLOSE_ADD_ACCOUNT_MODAL',
      logic: (state, action) => false,
    },
  ]
});

export default reducer;
