import React from 'react';

import NavBar from './components/NavBar';
import Wallpaper from './components/Wallpaper';
import Login from './components/Login';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
      <div className="container-app">
          <div className="menu">
            <NavBar />
          </div>
          <div className="wallpaper">
              <Wallpaper />
          </div>
          <div className="login">
              <Login />
          </div>
          <div className="footer">
                <Footer />
          </div>
      </div>
  );
}

export default App;
