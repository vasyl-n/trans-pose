
import React, { Component } from 'react';
import './Topbar.css'
import Transpose from '../Transpose/Transpose'

class Topbar extends Component {
  state = {
  }

  render() {
    return (
      <div className="Topbar">
        <div className="logo">Transpose<span>.</span></div>
        <div className="navigation">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
    );
  }
}

export default Topbar;
