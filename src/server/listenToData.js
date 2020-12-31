import store from './store';
import getDataFromDoc from './getDataFromDoc';

const storesAndTypes = [
  { storeFunc: store.openPositionsStore, type: 'POSITION_CHANGED' },
  { storeFunc: store.closedPositionsStore, type: 'CLOSED_POSITION_CHANGED' },
  { storeFunc: store.accountsStore, type: 'ACCOUNTS_CHANGED' },
];

const listenToData = ({ dispatch }) => {
  storesAndTypes.forEach(({ storeFunc, type }) => {
    storeFunc().onSnapshot((doc) => {
      const data = getDataFromDoc({ doc });
      dispatch({ type, data });
    });
  });
};

export default listenToData;
