import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.scss'

import Signup from '../SignUp';

const SignUp = ({ dispatch }) => {
  return (
    <div className='signup__container'>
      <label className='signup__input-container'>
        <div className='signup__label'>Email:</div>
        <input type='email' className='signup__input' />
      </label>

      <label className='signup__input-container'>
        <div className='signup__label'>Password:</div>
        <input type='password' className='signup__input' />
      </label>

      <label className='signup__input-container'>
        <div className='signup__label'>Confirmation:</div>
        <input type='password' className='signup__input' />
      </label>

      <div className='signup__input-container'>
        <button>Sign Up</button>
      </div>
      <div className='signup__input-container'>
        <Link to='/signin'>Sign In</Link>
      </div>
    </div>
  )
};

export default connect(state => ({}))(SignUp);
