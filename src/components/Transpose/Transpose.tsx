import React, { Component } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { transposeHandler } from '../../helpers/transpose.js';
import './Transpose.css';

class Transpose extends Component {
  state = {
    currentInput: '',
    result: '',
    transposerPosition: 0,
  }
  handleSubmit = (num: any) => {
    this.setState({result: transposeHandler(this.state.currentInput, num), transposerPosition: num});
  }

  handleInputChange = (input: string) => {
    this.setState({currentInput: input})
  }

  render() {
    return (
      <div className="Transpose" id="app">
        <TextInput handleChange={this.handleInputChange} />
        <div className="control-buttons">
          {
            buttons.map((el, ind) => {
              const active = this.state.transposerPosition === el;
              const classname = 'transpose-numbers ' + `active-${active}`
              return (
                <Button key={ind} className={classname} name={el.toString()} handleClick={(e: any) => {this.handleSubmit(Number(e.currentTarget.textContent))}} />
              )
            })
          }
        </div>
        <div className="result">
          {this.state.result}
        </div>
      </div>
    );
  }
}

const buttons = [-7, -6, -5, -4, -3, -2, -1 , 0, 1, 2, 3, 4, 5, 6, 7];
 
export default Transpose;
