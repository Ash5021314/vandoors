import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header'
import ControlledCarousel from './Components/ControlledCarousel'
import About from './Components/About'
import Items from './Components/Items'
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Header/>
      <ControlledCarousel/>
      <About/>
      <Items/>
      <Footer/>
    </>
  );
}

export default App;

