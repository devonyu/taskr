// @flow

import './App.css';
import Button from '@material-ui/core/Button';
import React from 'react';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import SingleTask from './components/SingleTask';

function App() {
  const [displayTask, toggleTask] = React.useState(false);
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Button
        variant="contained"
        color="primary"
        onClick={() => toggleTask(!displayTask)}
      >
        Toggle Example Task
      </Button>
      {displayTask && <SingleTask />}
    </div>
  );
}

export default App;
