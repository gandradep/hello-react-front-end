import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greetting from './Greetting';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greetting />} />
      </Routes>
    </div>
  );
}

export default App;
