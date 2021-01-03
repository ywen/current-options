import store from './store';
import getDataFromDoc from './getDataFromDoc';
import backup from './backup';

const storesAndTypes = [
  {
    storeFunc: store.openPositionsStore,
    type: 'POSITION_CHANGED',
    backupStore: store.openPositionsBackupStore,
  },
  {
    storeFunc: store.closedPositionsStore,
    backupStore: store.closedPositionsBackupStore,
    type: 'CLOSED_POSITION_CHANGED',
  },
];

const listenToData = ({ dispatch }) => {
  storesAndTypes.forEach(({ storeFunc, backupStore, type }) => {
    storeFunc().onSnapshot((doc) => {
      const data = getDataFromDoc({ doc });
      backup({docFunc: backupStore, doc });
      dispatch({ type, data });
    });
  });
  store.accountsStore().onSnapshot((doc) => {
    const data = getDataFromDoc({ doc });
    backup({docFunc: store.accountsBackupStore, doc });
    dispatch({ type: 'ACCOUNTS_CHANGED', data });
    dispatch({ type: 'SET_CURRENT_ACCOUNT', accountId: data[0].id });
  });
};

export default listenToData;
