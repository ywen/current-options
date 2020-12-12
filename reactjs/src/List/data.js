import Immutable from 'immutable';

const initialState = Immutable.List([]);

const processData = (state, action) => {
  if (!state) return initialState;
  if (action.type === 'POSITION_CHANGED') {
    return Immutable.fromJS(action.data.openPositions);
  }
  return state;
};

export default processData;
