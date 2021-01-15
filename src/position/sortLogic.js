import produce from 'immer';

const sortLogic = (state, action) => (
  produce(state, draft => {
    const currentField = draft.field;
    const currentDirection = draft.directionAsc;
    let newDirection = currentDirection;
    if (action.field === currentField) {
      newDirection = !currentDirection;
    }
    return { field: action.field, directionAsc: newDirection };
  })
);

export default sortLogic;
