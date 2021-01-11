import React from 'react';
import { connect } from 'react-redux';

import './Row.scss';

import getLabel from 'commons/getLabel';

const Row = ({ data, name, dispatch }) => {
  const value = data.get(name);
  return (
    <div className='add-position-row__container'>
      <div className='add-position-row__label'>
        {`${getLabel({name})}:`}
      </div>
      <div className='add-position-row__value'>
        {value}
      </div>
    </div>
  );
};

export default connect(state => ({
  data: state.addPositionFormData,
}))(Row);
