import store from './store';

const listenToData = ({ dispatch }) => {
  store.openPositionsStore().onSnapshot((doc) => {
    dispatch({ type: 'POSITION_CHANGED', data: doc.data() })
  });
};

export default listenToData;
