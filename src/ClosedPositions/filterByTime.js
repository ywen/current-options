import { createSelector } from 'reselect';
import filterClosedPositionsByAccountId from '../position/filterClosedPositionsByAccountId';
import { getDateByName } from './timeFilterNames';

const filterByTime = createSelector(
  filterClosedPositionsByAccountId,
  state => state.closedPositionsFilter,
  (positions, filterName) => {
    const { startDate, endDate } = getDateByName({name: filterName });
    return positions.filter(position => {
      const closedDate = new Date(position.get('closedDate'));
      return closedDate >= startDate && closedDate <= endDate;
    })
  }
);

export default filterByTime;


// import store from 'server/store';
// import field from 'position/model';
// import getEncryptedObjectFromMap from 'encryption/getEncryptedObjectFromMap';
    // const tsla = positions.find(p => p.get('id') === '9c9ecd78-4ddb-4471-a504-9f0e49526f0b');
    // if (tsla) {
    //   const fixed = tsla.set('purchasePrice', '16.16');
    //   const fields = field.metaFields.concat('accountId').concat(field.closedFields);
    //   const result = getEncryptedObjectFromMap({ data: fixed, fields });
    //   console.log(fixed.toJS())
    //   result.id = fixed.get('id');
    //   console.log(result)
    //   // store.closedPositionsStore().update({
    //   //   [result.id]: result,
    //   // })
    // }
