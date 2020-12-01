import React from 'react';
import { connect } from 'react-redux';

import './TextField.scss';

import getLabel from './getLabel';

const TextField = ({ data, name, dispatch, changeValue }) => {
  const value = data.get(name);
  const inputId = `form-input__${name}`;
  const changed = (e) => {
    changeValue({dispatch, key: name, value: e.target.value})
  };
  return (
    <div class='text-field__container'>
      <label
        className='text-field__label'
        htmlFor={inputId}
        key={`${name}-label`}
      >
        {`${getLabel({name})}:`}
      </label>
      <input
        id={inputId}
        key={`${name}-field`}
        className={`text-field__input text-field__input--${name}`}
        type='text'
        value={value || ''}
        onChange={changed}
      />
    </div>
  );
};

export default connect(state => ({
  data: state.addPositionFormData,
}))(TextField);
