import React from 'react';
import { connect } from 'react-redux';

import getLabel from '../commons/getLabel';
import { names } from './timeFilterNames';

import './TimeSelect.scss';

const TimeSelect = ({ filterName, dispatch }) => {
  const changeFilter = ({ name }) => {
    dispatch({ type: 'CLOSED_POSITIONS_FILTER_CHANGED', name });
  };

  const radio = ({ name }) => {
    const label = getLabel({ name });
    return ([
      <input
        type='radio'
        key={`button-${name}`}
        className='closedStockSummary__timeSelect--radio'
        value={name}
        onChange={() => changeFilter({ name })}
        checked={filterName === name}
        id={name}
      />,
      <label
        htmlFor={name}
        className='closedStockSummary__timeSelect--label'
        key={`label-${name}`}
      >
        {label}
      </label>
    ]);
  }

  return (
    <div className='closedStockSummary__timeSelectContainer'>
      { names.map(name => radio({ name })) }
    </div>
  )
};

export default connect(state => ({
  filterName: state.closedPositionsFilter,
}))(TimeSelect);
