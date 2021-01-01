import createReducer from '../commons/createReducer';

const initialState = null;

const processData = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'CHANGE_CURRENT_ACCOUNT',
      logic: (state, action) => action.accountId,
    }
  ]
});

export default processData;
