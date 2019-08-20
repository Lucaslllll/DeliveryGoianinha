import React from 'react';

import NavBar from './components/NavBar';
import Wallpaper from './components/Wallpaper';
import Login from './components/Login';
import { Row, Col, Container } from 'reactstrap';

function App() {
  return (
      <>
        <NavBar />
        <Container fluid>
        <Row>
          <Wallpaper />
          <Login />
        </Row>
        </Container>
      </>
  );
}

export default App;
