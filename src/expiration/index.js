import React from 'react';
import { connect } from 'react-redux';

import getStats from './getStats';
import TableRenderer from '../commons/tableRenderer';
import TotalSummarySection from '../commons/TotalSummarySection';

import './index.scss';

const Expiration = ({ stats, dispatch, sortConditions }) => {
  const tableRenderer = TableRenderer({
    sortConditions,
    sortConstant: 'SORT_IN_EXPIRATION_VIEW',
    dispatch,
    list: stats,
    singleKey: 'expirationDate',
    prefix: 'expiration-view',
    ths: [
      'expirationDate',
      'occupied',
      'potential',
      'occupiedPercentage',
      'potentialPercentage',
    ],
  });

  return (
    <div className='expiration-view__container authenticated__view-area'>
      <table className='expiration-view__table'>
        { tableRenderer.renderTableHeaders() }
        { tableRenderer.renderTbody() }
      </table>
      <TotalSummarySection
        list={stats}
        use='summaryFormat'
        prefix='expiration-view'
      />
    </div>
  );
};

export default connect(state => ({
  stats: getStats(state),
  sortConditions: state.sortExpirationView,
}))(Expiration);
