import createReducer from '../commons/createReducer';

const initialState = null;

const setLogic = (state, action) => {
  if (state === null) {
    return action.accountId;
  }
  return state;
}

const processData = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'CHANGE_CURRENT_ACCOUNT',
      logic: (state, action) => action.accountId,
    },
    {
      type: 'SET_CURRENT_ACCOUNT',
      logic: setLogic,
    },
  ]
});

export default processData;
