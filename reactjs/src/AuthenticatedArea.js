import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import auth from './server/auth';
import Menu from './Menu';
import AddForm from './addPosition/Form';
import List from './List';
import listenToData from './server/listenToData';

const signOut = () => auth().signOut();

const AuthenticatedArea = ({ user, dispatch }) => {
  useEffect(() => {
    if (user) {
      listenToData({ dispatch });
    }
  }, [user]);
  return ([
    <Menu key='menu' />,
    <AddForm key='addForm' />,
    <List key='list' />,
    <button onClick={signOut} key='signout'>Sign Out</button>
  ]);
};

export default connect(state => ({}))(AuthenticatedArea);
