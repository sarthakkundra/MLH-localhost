import React from 'react';

import HomePage from './components/pages/Homepage';

import RemarkState from './context/RemarkState';
import './App.css';

const App = ()  => {
  return (
    <RemarkState>
    <div className="App">
      <HomePage />
    </div>
    </RemarkState>
  );
}

export default App;
