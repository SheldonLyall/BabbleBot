import React from 'react';
import './App.css';
import Home from './pages/home';
import Navbar from './components/navbar';
import Banner from './components/banner';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner 
        backgroundColor='grey'
        headline='Welcome to Babblebot!'
        subText='We are glad to have you!'
        buttonColor='#292F36'
        buttonText='Sign-Up!'
        textColor='white'
      />
      <Home />
    </div>
  );
}

export default App;
