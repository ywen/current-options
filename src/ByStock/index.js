import React from 'react';
import { connect } from 'react-redux';

import getByStockSummary from './getByStockSummary';
import TableRenderer from '../commons/tableRenderer';
import TotalSummarySection from '../commons/TotalSummarySection';

import './index.scss';

const renderIndividual = ({s}) => {
  return (
    <tr className='byStock__tr' key={`byStock__tr--${s.get('stockSymbol')}`}>
      <td className='byStock__td' key='byStock__td--stock'>{s.get('stockSymbol')}</td>
      <td className='byStock__td' key='byStock__td--occupied'>{`$ ${s.get('occupied')}`}</td>
      <td className='byStock__td' key='byStock__td--potential'>{`$ ${s.get('potential')}`}</td>
      <td className='byStock__td' key='byStock__td--occupied-percent'>{`% ${s.get('occupiedPercentage')}`}</td>
      <td className='byStock__td' key='byStock__td--potential-percent'>{`% ${s.get('potentialPercentage')}`}</td>
      <td className='byStock__td' key='byStock__td--potential-vs-total'>{`% ${s.get('potentialVsTotal')}`}</td>
    </tr>
  )
};

const ByStock = ({ dispatch, summary, sortConditions }) => {
  const tableRenderer = TableRenderer({
    sortConditions,
    sortConstant: 'SORT_BY_STOCK_SUMMARY',
    dispatch,
    list: summary,
    prefix: 'byStock',
    renderIndividual,
    ths: [
      'stockSymbol',
      'occupied',
      'potential',
      'occupiedPercentage',
      'potentialPercentage',
      'potentialToTotal',
    ],
  });

  return (
    <div className='byStock__container'>
      <table className='byStock__table'>
        { tableRenderer.renderTableHeaders() }
        { tableRenderer.renderTbody() }
      </table>
      <TotalSummarySection
        list={summary}
        use='summaryFormat'
        prefix='byStock'
      />
    </div>
  );
}

export default connect(state => ({
  summary: getByStockSummary(state),
  sortConditions: state.sortByStockConditions,
}))(ByStock);
