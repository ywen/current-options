import React from 'react';

import auth from './firebase/auth';
import Menu from './Menu';
import AddForm from './addPosition/Form';

const signOut = () => auth().signOut();

const AuthenticatedArea = () => {
  return ([
    <Menu key='menu' />,
    <AddForm key='addForm' />,
    <button onClick={signOut} key='signout'>Sign Out</button>
  ]);
};

export default AuthenticatedArea;
