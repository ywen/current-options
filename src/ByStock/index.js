import React from 'react';
import { connect } from 'react-redux';

import getByStockSummary from './getByStockSummary';
import getLabel from '../commons/getLabel';

import './index.scss';

const renderIndividual = ({s, symbol}) => {
  return (
    <tr className='byStock__tr' key={`byStock__tr--${symbol}`}>
      <td className='byStock__td' key='byStock__td--symbol'>{symbol}</td>
      <td className='byStock__td' key='byStock__td--occupied'>{`$ ${s.get('occupied')}`}</td>
      <td className='byStock__td' key='byStock__td--occupied-percent'>{s.get('occupiedPercentage')}</td>
      <td className='byStock__td' key='byStock__td--potential'>{`$ ${s.get('potential')}`}</td>
      <td className='byStock__td' key='byStock__td--potential-percent'>{s.get('potentialPercentage')}</td>
    </tr>
  )
};

const ByStock = ({ dispatch, summary }) => {
  const renderSummary = () => {
    const result = [];
    summary.forEach((s, symbol) => {
      result.push(renderIndividual({s, symbol}));
    });
    return result;
  };

  const sort = ({ name }) => {
    dispatch({ type: 'SORT_BY_STOCK_SUMMARY', field: name });
  };

  const renderTh = ({ name }) => {
    return (
      <th
        className='byStock__th'
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
            { renderTh({ name: 'occupiedPercentage' })}
            { renderTh({ name: 'potential' })}
            { renderTh({ name: 'potentialPercentage' })}
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
}))(ByStock);
