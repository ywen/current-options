import store from 'server/store';
import model from 'position/model';

const deletePosition = ({ position }) => {
  if (model.isClosed({ data: position })) {
    store.deleteClosedPosition({ positionId: position.id });
  } else {
    store.deleteOpenPosition({ positionId: position.id });
  }
};

export default deletePosition;
