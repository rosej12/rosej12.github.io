import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Topic from './components/Topic';
import Practice from './components/Practice';
import './App.css';

function App() {  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:subject" element={<Topic />} />
          <Route path="/:subject/:topic" element={<Practice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;