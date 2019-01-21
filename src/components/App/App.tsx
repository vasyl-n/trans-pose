import React, { Component } from 'react';
import './App.css'
import Transpose from '../Transpose/Transpose'
import Topbar from '../Topbar/Topbar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        <Topbar />
        <Hero 
          header='Transpose your songs'
          copy='Use this app to change your song chords and lyrics to a different key'
          handleClick={()=> 'ble'}
        /> 
        <Transpose />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
