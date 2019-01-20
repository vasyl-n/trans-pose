import React, { Component } from 'react';
import './Button.css'

interface ButtonProps {name: string, handleClick: any, red: any}

class Button extends Component<ButtonProps, {}> {
  render() {
    return (
      <div className={this.props.red ? 'Button red' : ''} onClick={this.props.handleClick}>{this.props.name}</div>
    );
  }
}

export default Button;
