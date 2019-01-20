import React, { Component } from 'react';
import './Hero.css'
import Button from '../Button/Button'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

interface HeroProps {header: string, copy: string, handleClick:any}

class Hero extends Component<HeroProps, {}> {
  render() {
    return (
      <div className="Hero" id="home">
        <div className="image-wrap"></div>
        <div className="content">
          <div className="header">{this.props.header}</div>
          <div className="copy">{this.props.copy}</div>
          <Link activeClass="active-true" to="app" smooth={true} offset={-100} duration={500} >
            <Button className="red" name="Go to app" handleClick={this.props.handleClick} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Hero;
