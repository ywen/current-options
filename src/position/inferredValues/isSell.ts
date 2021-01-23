import Position from 'position/shape';

interface Params {
  position: Position;
};

const isSell = ({ position }: Params): boolean => Number(position.quantity) < 0

export default isSell;
