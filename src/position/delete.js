import store from '../server/store';

const deletePosition = ({ position }) => {
  store.deletePosition({ positionId: position.get('id') });
};

export default deletePosition;
