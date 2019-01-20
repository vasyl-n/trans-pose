import React, { Component } from 'react';
import './Hero.css'
import Button from '../Button/Button'

interface HeroProps {header: string, copy: string, handleClick:any}

class Hero extends Component<HeroProps, {}> {
  render() {
    return (
      <div className="Hero">
        <div className="image-wrap"></div>
        <div className="content">
          <div className="header">{this.props.header}</div>
          <div className="copy">{this.props.copy}</div>
          <Button className="red" name="Go to app" handleClick={this.props.handleClick} />
        </div>
      </div>
    );
  }
}

export default Hero;
