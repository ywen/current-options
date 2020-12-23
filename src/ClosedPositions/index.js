import { connect } from 'react-redux';
import Immutable from 'immutable';

import getSummary from './getClosedPositionsSummary';
import getSortableClassNames from '../commons/getSortableClassNames';
import getLabel from '../commons/getLabel';

import './index.scss';

const ClosedPositions = ({ summary, dispatch }) => {
  const sortConditions = Immutable.fromJS({
    directionAsc: true,
    field: 'stock',
  });
  const sort = ({ name }) => {
    dispatch({ type: 'SORT_CLOSED_STOCK_SUMMARY', field: name });
  };

  const renderTh = ({ name }) => {
    const classNames = getSortableClassNames({
      prefix: 'closedStockSummary',
      sortConditions,
      field: name,
    });
    return (
      <th
        className={classNames}
        onClick={() => sort({ name })}
      >
        {getLabel({ name })}
      </th>
    )
  };
  return (
    <div className='closedStockSummary__container'>
      <table className='closedStockSummary__table'>
        <thead className='closedStockSummary__thead'>
          <tr className='closedStockSummary__tr-head'>
            { renderTh({ name: 'stock' })}
            { renderTh({ name: 'occupied' })}
            { renderTh({ name: 'potential' })}
            { renderTh({ name: 'profit' })}
          </tr>
        </thead>
      </table>
    </div>
  );
  return false;
};

export default connect(state => ({
  summary: getSummary(state),
}))(ClosedPositions);
