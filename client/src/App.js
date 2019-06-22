// @flow

import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SingleTask from "./components/SingleTask";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <SingleTask />
    </div>
  );
}

export default App;
