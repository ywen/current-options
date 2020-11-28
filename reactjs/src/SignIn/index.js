import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.scss'

import Signup from '../SignUp';

const SignIn = ({ dispatch }) => {
  return (
    <div className='signin__container'>
      <label className='signin__input-container'>
        <div className='signin__label'>Email:</div>
        <input type='email' className='signin__input' />
      </label>

      <label className='signin__input-container'>
        <div className='signin__label'>Password:</div>
        <input type='password' className='signin__input' />
      </label>
      <div className='signin__input-container'>
        <button>Sign In</button>
      </div>
      <div className='signin__input-container'>
        <Link to='/signup'>Sign up</Link>
      </div>
    </div>
  )
};

export default connect(state => ({}))(SignIn);
