const createReducer = ({ initialState, handledTypes }) => {
  return (state, action) => {
    if (state === undefined) return initialState;
    let result = null;
    handledTypes.forEach(({type, logic}) => {
      if (action.type === type) {
        result = logic(state, action);
      }
    });
    return result !== null ? result : state;
  };
};

export default createReducer;
