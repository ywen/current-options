import logic from '../position/sortLogic';
import createReducer from '../commons/createReducer';

const initialState = {
  field: 'stock',
  directionAsc: true,
};

const sortByStockReducer = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'SORT_CLOSED_STOCK_SUMMARY',
      logic,
    }
  ]
});

export default sortByStockReducer;
