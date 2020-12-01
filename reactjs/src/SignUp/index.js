import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TextField from '../commons/TextField';

import './index.scss'

import create from './create';

const SignUp = ({ dispatch, email, password }) => {
  const changeValue = () => ( true );
  return ([
    <div className='signup__container'>
      <TextField changeValue={changeValue} name='email' key='symbol' />
      <TextField changeValue={changeValue} name='password' key='password' />
      <TextField changeValue={changeValue} name='confirmation' key='password' />
    </div>,
    <div className='signup__input-container'>
      <button onClick={create({ dispatch, email, password })}>Sign Up</button>
    </div>,
    <div className='signup__input-container'>
      <Link to='/signin'>Sign In</Link>
    </div>
  ])
};

export default connect(state => ({}))(SignUp);
