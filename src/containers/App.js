import React from 'react';
import _ from 'lodash';
import store from '../store';
import './App.css';

import Sidebar from '../components/SideBar';
import Main from '../components/Main';

const App = () => {
  const { contacts, user, activeUserId } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;
