import React from 'react';
import { connect } from 'react-redux';

import getByStockSummary from './getByStockSummary';
import getLabel from '../commons/getLabel';
import getSortableClassNames from '../commons/getSortableClassNames';

import './index.scss';

const renderIndividual = ({s}) => {
  return (
    <tr className='byStock__tr' key={`byStock__tr--${s.get('stock')}`}>
      <td className='byStock__td' key='byStock__td--symbol'>{s.get('stock')}</td>
      <td className='byStock__td' key='byStock__td--occupied'>{`$ ${s.get('occupied')}`}</td>
      <td className='byStock__td' key='byStock__td--potential'>{`$ ${s.get('potential')}`}</td>
      <td className='byStock__td' key='byStock__td--occupied-percent'>{`% ${s.get('occupiedPercentage')}`}</td>
      <td className='byStock__td' key='byStock__td--potential-percent'>{`% ${s.get('potentialPercentage')}`}</td>
      <td className='byStock__td' key='byStock__td--potential-vs-total'>{`% ${s.get('potentialVsTotal')}`}</td>
    </tr>
  )
};

const ByStock = ({ dispatch, summary, sortConditions }) => {
  const renderSummary = () => {
    const result = [];
    summary.forEach((s) => {
      result.push(renderIndividual({ s }));
    });
    return result;
  };

  const sort = ({ name }) => {
    dispatch({ type: 'SORT_BY_STOCK_SUMMARY', field: name });
  };

  const renderTh = ({ name }) => {
    const classNames = getSortableClassNames({
      prefix: 'byStock',
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
    <div className='byStock__container'>
      <table className='byStock__table'>
        <thead className='byStock__thead'>
          <tr className='byStock__tr'>
            { renderTh({ name: 'stock' })}
            { renderTh({ name: 'occupied' })}
            { renderTh({ name: 'potential' })}
            { renderTh({ name: 'occupiedPercentage' })}
            { renderTh({ name: 'potentialPercentage' })}
            { renderTh({ name: 'potentialToTotal' })}
          </tr>
        </thead>
        <tbody className='byStock__tbody'>
          { renderSummary() }
        </tbody>
      </table>
    </div>
  );
}

export default connect(state => ({
  summary: getByStockSummary(state),
  sortConditions: state.sortByStockConditions,
}))(ByStock);
