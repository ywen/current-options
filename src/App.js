import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import auth from './server/auth';
import store from './store';

import Routing from './Routing';

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

  // useEffect(() => {
  //   if (user) {
  //     navigate('/');
  //   } else {
  //     navigate('/signin');
  //   }
  // }, [user]);
  //
  return (
    <Provider store={store}>
      <Routing user={user} />
    </Provider>
  );
};

export default App;
