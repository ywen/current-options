import Immutable from 'immutable';

import createReducer from '../commons/createReducer';
import logic from '../commons/composePositions';

const initialState = Immutable.List([]);

const processData = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'CLOSED_POSITION_CHANGED',
      logic,
    }
  ]
});

export default processData;

