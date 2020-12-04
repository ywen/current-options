import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Menu from './Menu';
import AddForm from './addPosition/Form';

const AuthenticatedArea = ({ user }) => {
  if (!user) {
    return (
      <Redirect to='/signin' />
    );
  } else {
    return ([
      <Menu key='menu' />,
      <AddForm key='addForm' />
    ]);
  }
};

export default connect((state) => ({
  user: state.user,
}))(AuthenticatedArea);
