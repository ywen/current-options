import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import store from './store';
import Menu from './Menu';
import AddForm from './add-position/Form';
import initFirebase from './firebase';
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => {
  const [user, setUser] = useState(null);
  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
  };

  useEffect(() => {
    initFirebase();
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (!user) {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/signin'>
              <SignIn />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/'>
              <SignIn />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <AddForm />
      </Router>
    </Provider>
  );
}

export default App;
