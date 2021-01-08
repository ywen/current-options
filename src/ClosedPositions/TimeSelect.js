import React from 'react';
import { connect } from 'react-redux';

import getLabel from '../commons/getLabel';

import './TimeSelect.scss';

const TimeSelect = () => {
  const radio = ({ name }) => {
    const label = getLabel({ name });
    return ([
      <input
        type='radio'
        key={`button-${name}`}
        className='closedStockSummary__timeSelect--radio'
        id={name}
      />,
      <label
        htmlFor='thisYear'
        className='closedStockSummary__timeSelect--label'
        key={`label-${name}`}
      >
        {label}
      </label>
    ]);
  }

  return (
    <div className='closedStockSummary__timeSelectContainer'>
      {radio({ name: 'thisYear' })}
      {radio({ name: 'thisMonth' })}
      {radio({ name: 'thisWeek' })}
      {radio({ name: 'today' })}
    </div>
  )
};

export default connect(state => ({ }))(TimeSelect);
