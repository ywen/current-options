const initialState = null;
const setUser = (state, action) => {
  if (state === undefined) return initialState;
  if (action.type === 'USER_SIGNED_IN') {
    return action.user;
  }
  return state;
};

export default setUser;
