const onClick = ({ dispatch, link, navigate }) => {
  dispatch({ type: 'TAB_CHANGED', link });
  navigate(link);
};

export default onClick;
