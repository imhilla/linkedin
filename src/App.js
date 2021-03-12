import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Post from './Post';
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
      <Post name="Hillary" description="This is a test" message="Just a mesage" />
    </div>
  );
}

export default App;
