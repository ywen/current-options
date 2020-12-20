import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

import Tabs from './Tabs';
import Menu from './Menu';
import AddForm from './addPosition/Form';
import CloseModal from './closePosition';
import List from './List';
import Expiration from './expiration';
import listenToData from './server/listenToData';

import './AuthenticatedArea.scss'

const AuthenticatedArea = ({ user, dispatch }) => {
  useEffect(() => {
    if (user) {
      listenToData({ dispatch });
    }
  }, [user, dispatch]);
  return (
    <div className='authenticated__main'>
      <Menu key='menu' />
      <Tabs key='tabs' />
      <AddForm key='addForm' />
      <CloseModal key='closeModal' />
      <Route path="/list" key='list-route'>
        <List key='list-view'/>
      </Route>
      <Route path="/expiration" key='expiration-route'>
        <Expiration key='expiration-view' />
      </Route>
      <Redirect exact from="/" to="/list" />
    </div>
  );
};

export default connect(state => ({}))(AuthenticatedArea);
