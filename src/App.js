import React from 'react';
import Navbar from './components/navbar';
import Tiket from './components/tiket';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Tiket />
    </React.Fragment>
  );
}

export default App;