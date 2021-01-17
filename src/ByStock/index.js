import React from 'react';
import { connect } from 'react-redux';

import getByStockSummary from './getByStockSummary';
import TableRenderer from '../commons/tableRenderer';
import TotalSummarySection from '../commons/TotalSummarySection';

import './index.scss';

const ByStock = ({ dispatch, summary, sortConditions }) => {
  const tableRenderer = TableRenderer({
    sortConditions,
    sortConstant: 'SORT_BY_STOCK_SUMMARY',
    dispatch,
    list: summary,
    prefix: 'byStock',
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
    <div className='byStock__container authenticated__view-area'>
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
