import store from './store';
import getPositionsFromData from './getPositionsFromData';

const listenToData = ({ dispatch }) => {
  store.openPositionsStore().onSnapshot((doc) => {
    const data = getPositionsFromData({ doc });
    dispatch({ type: 'POSITION_CHANGED', data });
  });
  store.closedPositionsStore().onSnapshot((doc) => {
    const data = getPositionsFromData({ doc });
    dispatch({ type: 'CLOSED_POSITION_CHANGED', data });
  });
};

export default listenToData;
