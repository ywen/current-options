import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.scss'
import TextField from '../commons/TextField';

import Signup from '../SignUp';
import changeValue from './changeValue';
import action from './action';

const SignIn = ({ dispatch, data }) => {
  return (
    <div className='signin__container'>
      <TextField changeValue={changeValue} data={data} name='email' key='symbol' />
      <TextField changeValue={changeValue} fieldType='password' data={data} name='password' key='password' />
      <div className='signin__input-container'>
        <button onClick={() => action({dispatch, data})}>Sign In</button>
      </div>
      <div className='signin__input-container'>
        <Link to='/signup'>Sign up</Link>
      </div>
    </div>
  )
};

export default connect(state => (
  {
    data: state.signInData,
  }
))(SignIn);
