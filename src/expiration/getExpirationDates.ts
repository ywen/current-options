import { createSelector } from 'reselect';

import sortPositions from 'position/sortPositions';
import groupBy from 'commons/groupBy';
import makeFilterByAccountSelector from 'position/makeFilterByAccountSelector';

const filterByAccountId = makeFilterByAccountSelector({ positionKind: 'positions' });

const getExpirationDates = createSelector(
  filterByAccountId,
  state => state.sortExpirationView,
  (positions, sort) => {
    const group = Object.keys(groupBy({ data: positions, key: 'expirationDate' }));
    return sortPositions({ positions: group, sortConditions: sort });
  }
);

export default getExpirationDates;
