import React, { Component } from 'react';
import './Button.css'

interface ButtonProps {className: string; name: string, handleClick: any}

class Button extends Component<ButtonProps, {}> {
  render() {
    return (
      <div className={this.props.className + ' Button'} onClick={this.props.handleClick}>{this.props.name}</div>
    );
  }
}

export default Button;
