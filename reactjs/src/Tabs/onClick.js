import history from '../commons/history';

const onClick = ({ dispatch, link }) => {
  dispatch({ type: 'TAB_CHANGED', link });
  history.push(link);
};

export default onClick;
