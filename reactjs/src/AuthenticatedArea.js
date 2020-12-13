import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Route, Link, Redirect } from 'react-router-dom';

import auth from './server/auth';
import Menu from './Menu';
import AddForm from './addPosition/Form';
import List from './List';
import Expiration from './expiration';
import listenToData from './server/listenToData';
import './AuthenticatedArea.scss'

const signOut = () => auth().signOut();

const AuthenticatedArea = ({ user, dispatch }) => {
  useEffect(() => {
    if (user) {
      listenToData({ dispatch });
    }
  }, [user, dispatch]);
  return ([
    <Menu key='menu' />,
    <AddForm key='addForm' />,
    <div className='views__menu-container'>
      <Link className='views__menu' to="/list">List View</Link>
      <Link className='views__menu' to="/expiration">Expiration View</Link>
    </div>,
    <Route path="/list" key='list-route'>
      <List key='list-view'/>
    </Route>,
    <Route path="/expiration" key='expiration-route'>
      <Expiration key='expiration-view' />
    </Route>,
    <Redirect exact from="/" to="/list" />,
    <button onClick={signOut} className='signout' key='signout'>Sign Out</button>
  ]);
};

export default connect(state => ({}))(AuthenticatedArea);
