import React from 'react';

import Menu from './Menu';
import AddForm from './addPosition/Form';

const AuthenticatedArea = () => {
  return ([
    <Menu key='menu' />,
    <AddForm key='addForm' />
  ]);
};

export default AuthenticatedArea;
