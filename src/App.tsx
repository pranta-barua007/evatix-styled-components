import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from './components/Button.styled';
import { Pagination } from './components/Pagination.styled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Custom Button component</p>
        <Button appearance='primary' textColor='danger'>TESTING</Button>
      
        <p>Pagination component</p>
        <Pagination pages={[1,2,3,4,5]}/>
      </header>
    </div>
  );
}

export default App;
