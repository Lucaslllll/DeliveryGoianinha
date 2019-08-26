import React from 'react';

import NavBar from './components/NavBar';
import Login from './screen/Login';
import beforeLogin from './components/beforeLogin';


import './App.css';

function App() {
  return (
      <div className="container-app">
          <div className="menu">
            <NavBar />
          </div>
          <div>
            <Login />
          </div>
      </div>
  );
}


export default App;
