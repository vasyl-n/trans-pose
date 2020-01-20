
import React, { Component } from 'react';
import './Topbar.css';
import Scrollspy from 'react-scrollspy';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Topbar extends Component {
  state = {
  }

  render() {
    return (
      <div className="Topbar">
        <div className="logo">Trans-pose<span>.</span></div>
        <div className="navigation">
          <Scrollspy offset={-100} items={ ['home', 'app', 'contact'] } currentClassName="is-current" >
            <li>
              <Link activeClass="is-current" to="home" smooth={true} offset={-100} duration={500} >
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="is-current" to="app" smooth={true} offset={-100} duration={500} >
                App
              </Link>
            </li>
            <li>
              <Link activeClass="is-current" to="contact" smooth={true} offset={0} duration={500} >
                Contact
              </Link>
            </li>
            <li>
              <a href="https://github.com/vasyl-n/trans-pose" target="_blank">Github</a>
            </li>
          </Scrollspy>
        </div>
      </div>
    );
  }
}

export default Topbar;
