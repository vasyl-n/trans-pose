import React, { Component } from 'react';
import './App.css'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { transposeHandler } from '../../helpers/transpose.js'

class App extends Component {
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
      <div className="App">
        <TextInput handleChange={this.handleInputChange} />
        <Button name='Transpose' handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
