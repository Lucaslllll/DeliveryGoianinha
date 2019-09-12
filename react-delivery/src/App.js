import React from 'react';

import NavBar from './components/NavBar';

import Routes from './routes';

import { isAuthenticated } from "./services/auth";

import './App.css';

function App() {
  return (
    <div className="body">
      <div className="container-app">
          <div className="menu">
            <NavBar isLogin={isAuthenticated} />
          </div>
          <div>
            <Routes />
          </div>
      </div>
    </div>
  );
}

export default App;