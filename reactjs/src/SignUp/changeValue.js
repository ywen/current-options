const changeValue = ({ dispatch, key, value }) => {
  dispatch({ type: 'SIGN_UP_VALUE_CHANGED', key, value });
}

export default changeValue;
