// @flow

import './App.css';
import React from 'react';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <TaskList />
    </div>
  );
}

export default App;
