// import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
//old versi 
//import React, { Component } from 'react';

function App(){
  return(
    <div className="App">
      <Navbar />
     
      <div className="content"></div>
      <Home name="Beranda"/>
    </div>
  );
}
export default App;
