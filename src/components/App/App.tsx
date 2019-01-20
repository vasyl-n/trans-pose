import React, { Component } from 'react';
import './App.css'
import Transpose from '../Transpose/Transpose'
import Topvar from '../Topbar/Topbar'
import Topbar from '../Topbar/Topbar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';


class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        <Topbar />
        <Hero 
          header='Transpose all your songs'
          copy="Blah blah blah blaaaaa blaaahhh"
          handleClick={()=> 'ble'}
        />
          
        <Transpose />
        <Footer />
      </div>
    );
  }
}

export default App;
