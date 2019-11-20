// @flow

import './App.css';
import React, { useState } from 'react';
import Homepage2 from './components/Homepage2';
import Navbar from './components/Navbar';
import TaskContainer from './components/TaskContainer';

function App() {
  const [view, setView] = useState('home');

  return (
    <div className="App">
      {view === 'home' ? (
        <Homepage2 setView={setView} />
      ) : (
        <>
          <Navbar setView={setView} />
          <TaskContainer />
        </>
      )}
    </div>
  );
}

export default App;
