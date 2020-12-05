import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import store from './store';
import AuthenticatedArea from './AuthenticatedArea';
import initFirebase from './firebase';
import SignIn from './SignIn';
import SignUp from './SignUp';

import history from './commons/history';

const App = () => {
  const [ user, setUser ] = useState(null);
  useEffect(() => {
    initFirebase();
    const onAuthStateChanged = user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    };
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    if (user) {
      history.push('/');
    } else {
      history.push('/signin');
    }
  }, [user]);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/'>
            <AuthenticatedArea />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
