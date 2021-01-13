import logic from '../position/sortLogic';
import createReducer from '../commons/createReducer';

const initialState = {
  field: 'expirationDate',
  directionAsc: true,
};

const sortReducer = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'SORT_IN_EXPIRATION_VIEW',
      logic,
    }
  ]
});

export default sortReducer;

