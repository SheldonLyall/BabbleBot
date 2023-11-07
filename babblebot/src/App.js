import React from 'react';
import './App.css';
import Home from './pages/home';
import Navbar from './components/navbar';
import Banner from './components/banner';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
