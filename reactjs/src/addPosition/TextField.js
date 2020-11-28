import React from 'react';
import { connect } from 'react-redux';

import getLabel from './getLabel';
import changeValue from './changeValue';

const TextField = ({ data, name, dispatch }) => {
  const value = data.get(name);
  const inputId = `add-position-input__${name}`;
  const changed = (e) => {
    changeValue({dispatch, key: name, value: e.target.value})
  };
  return ([
    <label
      className='add-position__label'
      htmlFor={inputId}
      key={`${name}-label`}
    >
      {`${getLabel({name})}:`}
    </label>,
    <input
      id={inputId}
      key={`${name}-field`}
      className={`add-position__input add-position__input--${name}`}
      type='text'
      value={value || ''}
      onChange={changed}
    />
  ]);
};

export default connect(state => ({
  data: state.addPositionFormData,
}))(TextField);
