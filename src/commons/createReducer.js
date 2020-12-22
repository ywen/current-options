const createReducer = ({ initialialState, handledTypes }) => {
  return (state, action) => {
    if (!state) return initialialState;
    let result = null;
    console.log(state.toJS(), action)
    handledTypes.forEach(({type, logic}) => {
      if (action.type === type) {
        result = logic(state, action);
      }
    });
    return result || state;
  };
};

export default createReducer;
