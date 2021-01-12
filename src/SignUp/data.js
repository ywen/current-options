const initialState = Immutable.fromJS({});

const data = (state, action) => {
  if (state === undefined) return initialState;
  if (action.type === 'SIGN_UP_VALUE_CHANGED') {
    const { key, value} = action;
    return state.set(key, value);
  }
  return state;
};

export default data;
