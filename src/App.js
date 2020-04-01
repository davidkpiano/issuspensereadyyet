import React from 'react';
import './App.css';
import { Loader } from './Loader';

function App() {
  return (
    <div className="app">
      <h1>Is suspense ready yet?</h1>
      <h2>
        Answer: <Loader />
      </h2>
    </div>
  );
}

export default App;
