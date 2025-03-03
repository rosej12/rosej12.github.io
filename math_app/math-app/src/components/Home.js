import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <h2>Choose a Subject:</h2>
      <ul>
        <li><Link to="/math">Math</Link></li>
        <li><Link to="/science">Science</Link></li>
      </ul>
    </div>
  );
}

export default Home;
