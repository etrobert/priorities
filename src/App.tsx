import React from 'react';

import LogIn from './LogIn';
import PrioritiesList from './PrioritiesList';
import useCurrentUser from './useCurrentUser';

import './App.css';

function App() {
  const user = useCurrentUser();

  return (
    <div>
      <header className="App-header">
        <h1>Étienne's Priorities</h1>
        {user === null ? <LogIn /> : <PrioritiesList />}
      </header>
    </div>
  );
}

export default App;
