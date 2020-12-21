const changeValue = ({ dispatch, key, value }) => {
  dispatch({ type: 'SIGN_IN_VALUE_CHANGED', key, value });
}

export default changeValue;
