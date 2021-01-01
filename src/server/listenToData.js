import store from './store';
import getDataFromDoc from './getDataFromDoc';

const storesAndTypes = [
  { storeFunc: store.openPositionsStore, type: 'POSITION_CHANGED' },
  { storeFunc: store.closedPositionsStore, type: 'CLOSED_POSITION_CHANGED' },
];

const listenToData = ({ dispatch }) => {
  storesAndTypes.forEach(({ storeFunc, type }) => {
    storeFunc().onSnapshot((doc) => {
      const data = getDataFromDoc({ doc });
      dispatch({ type, data });
    });
  });
  store.accountsStore().onSnapshot((doc) => {
    const data = getDataFromDoc({ doc });
    dispatch({ type: 'ACCOUNTS_CHANGED', data });
    dispatch({ type: 'SET_CURRENT_ACCOUNT', accountId: data[0].id });
  });
};

export default listenToData;
