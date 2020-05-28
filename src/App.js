import React from 'react';
import Navbar from './components/navbar';
import Container from './components/container';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Container />
    </React.Fragment>
  );
}

export default App;