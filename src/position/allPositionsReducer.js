import createReducer from 'commons/createReducer';
import logic from 'commons/composePositions';

const initialState = [];

const processData = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'POSITION_CHANGED',
      logic,
    }
  ]
});

export default processData;
