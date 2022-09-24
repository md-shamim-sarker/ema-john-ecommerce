import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';

const App = () => {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Shop></Shop>
    </div>
  );
};

export default App;