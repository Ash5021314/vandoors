import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header'
import ControlledCarousel from './Components/ControlledCarousel'
import About from './Components/About'
import Items from './Components/Items'


function App() {
  return (
    <>
      <Header/>
      <ControlledCarousel/>
      <About/>
      <Items/>
    </>
  );
}

export default App;

