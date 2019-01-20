
import React, { Component } from 'react';
import './Topbar.css';
import Scrollspy from 'react-scrollspy';

class Topbar extends Component {
  state = {
  }

  render() {
    return (
      <div className="Topbar">
        <div className="logo">Trans-pose<span>.</span></div>
        <div className="navigation">
          <Scrollspy offset={-100} items={ ['home', 'app', 'contact'] } currentClassName="is-current" >
            <li><a href="#home">Home</a></li>
            <li><a href="#app">App</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://github.com/test">Github</a></li>
          </Scrollspy>
        </div>
      </div>
    );
  }
}

export default Topbar;
