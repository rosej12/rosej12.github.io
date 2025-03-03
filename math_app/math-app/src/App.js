/**
 * App.js
 * 
 * The main entry point of the app. The routing and navigation structure is defined here. 
 * 
 **/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';      // Home Page
import Topic from './components/Topic';       // Topic Page
import Practice from './components/Practice'; // Practice Page
import './App.css';                           // Styling

function App() { // starts app on Home page
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the topics page (lists the topics for a subject)*/}
          <Route path="/:subject" element={<Topic />} />
          {/* Route for the practice page */}
          <Route path="/:subject/:topic" element={<Practice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;