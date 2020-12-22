import React from 'react';
import { connect } from 'react-redux';

import getByStockSummary from './getByStockSummary';

import './index.scss';

const renderIndividual = ({s, symbol}) => {
  return (
    <tr className='byStock__tr' key={`byStock__tr--${symbol}`}>
      <td className='byStock__td' key='byStock__td--symbol'>{symbol}</td>
      <td className='byStock__td' key='byStock__td--occupied'>{s.get('occupied')}</td>
      <td className='byStock__td' key='byStock__td--potential'>{s.get('potential')}</td>
    </tr>
  )
};

const ByStock = ({ summary }) => {
  const renderSummary = () => {
    const result = [];
    summary.forEach((s, symbol) => {
      result.push(renderIndividual({s, symbol}));
    });
    return result;
  };
  return (
    <div className='byStock__container'>
      <table className='byStock__table'>
        <thead className='byStock__thead'>
          <tr className='byStock__tr'>
            <th className='byStock__th'>Stock</th>
            <th className='byStock__th'>Occupied</th>
            <th className='byStock__th'>Potential</th>
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
