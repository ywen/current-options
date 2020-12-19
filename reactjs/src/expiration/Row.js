import getLabel from '../commons/getLabel';
import './Row.scss';

const Row = ({ stat, name }) => {
  const baseValue = stat.get(name);
  const percent = stat.get(`${name}Percentage`);
  return (
    <div className='expiration-view__row'>
      <div className='expiration-view__stat--label'>{getLabel({ name })}</div>
      <div className='expiration-view__stat'>{`$ ${stat.get(name)}`}</div>
      <div className='expiration-view__percentage'>{percent}</div>
    </div>
  )
};

export default Row;
