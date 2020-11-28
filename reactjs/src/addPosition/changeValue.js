const changeValue = ({ dispatch, value, key}) => (
  dispatch({ type: 'ADD_POSITION_VALUE_CHANGED', value, key })
);

export default changeValue;
