import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';

import auth from './server/auth';

import store from './store';
import AuthenticatedArea from './AuthenticatedArea';
import SignIn from './SignIn';
import SignUp from './SignUp';

import history from './commons/history';

const App = () => {
  const [ user, setUser ] = useState(null);
  useEffect(() => {
    const onAuthStateChanged = user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    };
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
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
