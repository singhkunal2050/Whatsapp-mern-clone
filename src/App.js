import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <h1>HELLO REACT</h1>
      {/* SIdebar component  */}
      <Sidebar/>
      {/* CHAt component */}
      <Chat/>


    </div>

);
}

export default App;
