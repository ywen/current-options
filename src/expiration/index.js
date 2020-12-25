import React from 'react';
import { connect } from 'react-redux';

import getStats from './getStats';
import TableRenderer from '../commons/tableRenderer';
import TotalSummarySection from '../commons/TotalSummarySection';

import './index.scss';

const renderIndividual = ({ s }) => {
  return(
    <tr className='expiration-view__tr' key={`expiration-view__tr--${s.get('expirationDate')}`}>
      <td className='expiration-view__td' key='expiration-view__td--expirationDate'>{s.get('expirationDate')}</td>
      <td className='expiration-view__td' key='expiration-view__td--occupied'>{`$ ${s.get('occupied')}`}</td>
      <td className='expiration-view__td' key='expiration-view__td--potential'>{`$ ${s.get('potential')}`}</td>
      <td className='expiration-view__td' key='expiration-view__td--occupied-percent'>{`% ${s.get('occupiedPercentage')}`}</td>
      <td className='expiration-view__td' key='expiration-view__td--potential-percent'>{`% ${s.get('potentialPercentage')}`}</td>
    </tr>
  );
};

const Expiration = ({ stats, dispatch, sortConditions }) => {
  const tableRenderer = TableRenderer({
    sortConditions,
    sortConstant: 'SORT_IN_EXPIRATION_VIEW',
    dispatch,
    list: stats,
    prefix: 'expiration-view',
    renderIndividual,
    ths: [
      'expirationDate',
      'occupied',
      'potential',
      'occupiedPercentage',
      'potentialPercentage',
    ],
  });

  return (
    <div className='expiration-view__container'>
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
