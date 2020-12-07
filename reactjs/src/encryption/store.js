const initialState = {};

const key = (state, action) => {
  if (state === undefined) return initialState;
  if (action.type === 'KEY_ADDED') {
    return action.key;
  }
  return state;
};

export default key;
