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

  componentDidMount() {
    if(window.location.host.indexOf('localhost') === -1 ) {
      const splited = window.location.href.split('://');
      if(splited[0] === 'http') {
        const newUrl = `https://${splited[1]}`
        window.location.href = newUrl;
      }
    }
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
