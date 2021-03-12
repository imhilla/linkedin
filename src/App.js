import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      {/* {header} */}
      <Header />
      {/* Appbody */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* widgets */}
    </div>
  );
}

export default App;
