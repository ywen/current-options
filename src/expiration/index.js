import React from 'react';
import { connect } from 'react-redux';

import getStats from './getStats';
import Row from './Row';

import './index.scss';

const renderStat = ({ stat, expirationDate }) => {
  return(
    <div className='expiration-view__stat-container'>
      <div className='expiration-view__header-row'>
        <div className='expiration-view__expiration-date__label'>Expiration Date</div>
        <div className='expiration-view__expiration-date'>{expirationDate}</div>
      </div>
      <Row stat={stat} name={'potential'} key='potential' />
      <Row stat={stat} name={'occupied'} key='occupied' />
    </div>
  );
};

const render = ({ stats }) => {
  const array = [];
  stats.forEach((stat, expirationDate) => array.push(renderStat({ stat, expirationDate })));
  return array;
};

const Expiration = ({ stats }) => {
  return (
    <div className='expiration-view__container'>
      {render( {stats} )}
    </div>
  )
};

export default connect(state => ({
  stats: getStats(state),
}))(Expiration);
