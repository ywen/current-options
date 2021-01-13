import getLabel from '../commons/getLabel';
import './Row.scss';

const Row = ({ stat, name }) => {
  const percent = stat[`${name}Percentage`];
  return (
    <div className='expiration-view__row'>
      <div className='expiration-view__stat--label'>{getLabel({ name })}</div>
      <div className='expiration-view__stat'>{`$ ${stat[name]}`}</div>
      <div className='expiration-view__percentage'>{percent}</div>
    </div>
  )
};

export default Row;
