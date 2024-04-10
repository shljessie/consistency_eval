import './App.css'; // Assuming you have some basic styling

import ChatContainer from './components/ChatContainer'; // Ensure this path matches your file structure
import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Consistency Bot Survey</h3>
        <p style={{marginLeft:'70%', fontWeight:'600'}}>Prolific ID : XXXZXXXX</p>
      </header>
      <div style={{display:'flex'}}>
        <Sidebar /> {/* Add the Sidebar to your layout */}
        <ChatContainer />
      </div>
    </div>
  );
}

export default App;
