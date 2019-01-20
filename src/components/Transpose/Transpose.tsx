import React, { Component } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { transposeHandler } from '../../helpers/transpose.js'

class Transpose extends Component {
  state = {
    currentInput: '',
    isPlus: true,
    number: 2,
  }
  handleSubmit = (input: string) => {
    transposeHandler(this.state.currentInput, true, 3)
  }

  handleInputChange = (input: string) => {
    this.setState({currentInput: input})
  }

  render() {
    return (
      <div className="Transpose">
        <TextInput handleChange={this.handleInputChange} />
        <Button red={false} name='Transpose' handleClick={this.handleSubmit}/>
      </div>
    );
  }
}

export default Transpose;
