import React, { Component } from 'react';
import './TextInput.css'

interface TextInputProps {handleChange: any}

class TextInput extends Component<TextInputProps, {}> {
  render() {
    return (
      <div className="TextInput">
        <textarea onChange={(e) => this.props.handleChange(e.target.value)} placeholder="Paste your chords here"></textarea>
      </div>
    );
  }
}

export default TextInput;
