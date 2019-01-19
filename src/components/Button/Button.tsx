import React, { Component } from 'react';

interface ButtonProps {name: string, handleSubmit: any}

class Button extends Component<ButtonProps, {}> {
  render() {
    return (
      <button className="button" onClick={this.props.handleSubmit}>{this.props.name}</button>
    );
  }
}

export default Button;
