import Immutable from 'immutable';
import logic from '../position/sortLogic';
import createReducer from '../commons/createReducer';

const initialState = Immutable.fromJS({
  field: 'stock',
  directionAsc: true,
});

const sortByStockReducer = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'SORT_BY_STOCK_SUMMARY',
      logic,
    }
  ]
});

export default sortByStockReducer;
