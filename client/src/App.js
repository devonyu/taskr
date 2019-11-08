// @flow

import './App.css';
import React, { useState } from 'react';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import TaskContainer from './components/TaskContainer';

function App() {
  const [view, setView] = useState('home');

  return (
    <div className="App">
      <Navbar setView={setView} />
      {view === 'home' ? <Homepage /> : <TaskContainer />}
    </div>
  );
}

export default App;
