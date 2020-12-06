const initialState = {};

const key = (state, action) => {
  if (state === undefined) return initialState;
  if (action.type === 'KEY_ADDED') {
    const { key } = action;
    return { key };
  }
  return state;
};

export default key;
