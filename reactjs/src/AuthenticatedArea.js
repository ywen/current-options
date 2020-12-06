import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Menu from './Menu';
import AddForm from './addPosition/Form';
import getFirebase from './firebase';

const signOut = () => {
  getFirebase();
  firebase.auth().signOut();
}
const AuthenticatedArea = () => {
  return ([
    <Menu key='menu' />,
    <AddForm key='addForm' />,
    <button onClick={signOut} key='signout'>Sign Out</button>
  ]);
};

export default AuthenticatedArea;
