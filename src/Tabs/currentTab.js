const initialState = '/list';

const currentTab = (state, action) => {
  if (!state) return initialState;
  if (action.type === 'TAB_CHANGED') {
    return action.link;
  }
  return state;
}

export default currentTab;
