import React from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import TextField from '../commons/TextField';

import './index.scss'

import create from './create';
import changeValue from './changeValue';

const SignUp = ({ dispatch, data }) => {
  const navigate = useNavigate();
  return ([
    <div className='signup__container' key='fields-container'>
      <TextField changeValue={changeValue} data={data} name='email' key='symbol' />
      <TextField changeValue={changeValue} fieldType='password' data={data} name='password' key='password' />
      <TextField changeValue={changeValue} fieldType='password' data={data} name='confirmation' key='confirmation' />
    </div>,
    <div className='signup__input-container' key='submit-button'>
      <button onClick={() => create({ navigate, dispatch, data })}>Sign Up</button>
    </div>,
    <div className='signup__input-container' key='signin-link'>
      <Link to='/signin'>Sign In</Link>
    </div>
  ])
};

export default connect(state => {
  return {
    data: state.signUpData,
  }
})(SignUp);
