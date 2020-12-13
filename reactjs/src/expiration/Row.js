import getLabel from '../commons/getLabel';
import './Row.scss';

const Row = ({ stat, name, withDollarSign }) => {
  const baseValue = stat.get(name);
  const value = withDollarSign ? `$ ${baseValue}` : baseValue;
  return (
    <div className='expiration-view__row'>
      <div className='expiration-view__stat--label'>{getLabel({ name })}</div>
      <div className='expiration-view__stat'>{value}</div>
    </div>
  )
};

export default Row;
