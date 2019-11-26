// @flow

import React from 'react';
import './FullPageSpinner.css';

function FullPageSpinner() {
  return (
    <div className="loading-container">
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube" />
        <div className="sk-cube2 sk-cube" />
        <div className="sk-cube4 sk-cube" />
        <div className="sk-cube3 sk-cube" />
      </div>
    </div>
  );
}
export default FullPageSpinner;
