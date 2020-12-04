import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';

import store from './store';
import AuthenticatedArea from './AuthenticatedArea';
import initFirebase from './firebase';
import SignIn from './SignIn';
import SignUp from './SignUp';

import history from './commons/history';

const App = () => {
  useEffect(() => {
    initFirebase();
  }, []);

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
