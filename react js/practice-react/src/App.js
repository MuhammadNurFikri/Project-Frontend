// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';

class Header extends Component{
  render(){
    return(
    <div>
      <h2>Makanan Indonesia</h2>
       </div>
       );
  }
}
class App extends Component{
  render(){
    return(
    <div>
    <Header />
     <h1 className="App">Hello Word!</h1>
     </div>
    );
}
}
export default App;
