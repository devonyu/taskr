// @flow

import './App.css';
import React from 'react';
// import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import TaskContainer from './components/TaskContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homepage /> */}
      <TaskContainer />
    </div>
  );
}

export default App;
