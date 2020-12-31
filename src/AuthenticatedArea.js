import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';

import Tabs from './Tabs';
import Menu from './Menu';
import AddForm from './addPosition/Form';
import AccountForm from './Account/Form';
import CloseModal from './closePosition';
import listenToData from './server/listenToData';

import './AuthenticatedArea.scss'

const AuthenticatedArea = ({ user, dispatch }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      listenToData({ dispatch });
      navigate('/list');
    } else {
      navigate('/signin');
    }
  }, [user, dispatch, navigate]);
  return (
    <div className='authenticated__main'>
      <Menu key='menu' />
      <Tabs key='tabs' />
      <AddForm key='addForm' />
      <AccountForm key='accountForm' />
      <CloseModal key='closeModal' />
      <Outlet />
    </div>
  );
};

export default connect(state => ({}))(AuthenticatedArea);
