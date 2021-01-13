import store from '../server/store';

const deletePosition = ({ position }) => {
  store.deletePosition({ positionId: position.id });
};

export default deletePosition;
