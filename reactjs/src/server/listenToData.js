import store from './store';

const listenToData = ({ dispatch }) => {
  store.openPositionsStore().onSnapshot((doc) => {
    const data = store.getOpenOptionsFromData({ doc });
    dispatch({ type: 'POSITION_CHANGED', data });
  });
};

export default listenToData;
