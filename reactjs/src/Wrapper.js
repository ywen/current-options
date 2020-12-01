import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import SignIn from './SignIn';
import Menu from './Menu';
import AddForm from './addPosition/Form';
import initFirebase from './firebase';

const Wrapper = ({ user }) => {
  useEffect(() => {
    initFirebase();
  }, []);
  if (!user) {
      <Router>
        <Switch>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/'>
            <Menu />,
            <AddForm />
          </Route>
        </Switch>
      </Router>
  }
  return (
    [
    ]
  );
}

export default connect(state => ({
  user: state.user,
}))(Wrapper);
