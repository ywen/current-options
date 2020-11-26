import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Menu from './Menu';
import AddForm from './add-position/Form';

const App = () => {
  return (
    <Provider store={store}>
      <Menu />
      <AddForm />
    </Provider>
  );
}

export default App;
