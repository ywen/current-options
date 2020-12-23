import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

import Tabs from './Tabs';
import Menu from './Menu';
import AddForm from './addPosition/Form';
import CloseModal from './closePosition';
import List from './List';
import Expiration from './expiration';
import ByStock from './ByStock';
import ClosedPositions from './ClosedPositions';
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
      <Route path="/by_stock" key='by-stock-route'>
        <ByStock key='by-stock-view' />
      </Route>
      <Route path="/closed_positions" key='closed_positions'>
        <ClosedPositions key='closed_positions' />
      </Route>
      <Redirect exact from="/" to="/list" />
    </div>
  );
};

export default connect(state => ({}))(AuthenticatedArea);
