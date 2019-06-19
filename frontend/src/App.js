import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Taskr App page
        </p>
        <a
          className="App-link"
          href="https://github.com/devonyu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create and modify your tasks!
        </a>
      </header>
    </div>
  );
}

export default App;
