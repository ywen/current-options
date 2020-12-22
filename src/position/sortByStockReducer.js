import Immutable from 'immutable';
import logic from './sortLogic';
import createReducer from '../commons/createReducer';

const initialialState = Immutable.fromJS({
  field: 'stock',
  directionAsc: true,
});

const sortByStockReducer = createReducer({
  initialialState,
  handledTypes: [
    {
      type: 'SORT_BY_STOCK_SUMMARY',
      logic,
    }
  ]
});

export default sortByStockReducer;
