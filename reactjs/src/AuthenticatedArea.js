import React, { useEffect } from 'react';
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
      <Menu />,
      <AddForm />
    ]);
  }
};

export default connect()(AuthenticatedArea)
