import createReducer from '../commons/createReducer';

const initialState = 'today';

const reducer = createReducer({
  initialState,
  handledTypes: [{
    type: 'CLOSED_POSITIONS_FILTER_CHANGED',
    logic: (state, action) => action.name,
  }]
});

export default reducer;
