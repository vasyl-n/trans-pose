import React, { Component } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { transposeHandler } from '../../helpers/transpose.js';
import './Transpose.css';

class Transpose extends Component {
  state = {
    currentInput: '',
    isPlus: true,
    number: 2,
  }
  handleSubmit = () => {
    transposeHandler(this.state.currentInput, true, 3)
  }

  handleInputChange = (input: string) => {
    this.setState({currentInput: input})
  }

  render() {
    return (
      <div className="Transpose">
        <TextInput handleChange={this.handleInputChange} />
        {/* <Button red={false} name='Transpose' handleClick={this.handleSubmit}/> */}
        <div className="control-buttons">
          {
            buttons.map((el, ind) => {
              return (
                <Button key={ind} className={'transpose-numbers'} name={el.toString()} handleClick={(e: any) => {console.log(e.currentTarget.textContent)}} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

const buttons = [-7, -6, -5, -4, -3, -2, -1 , 0, 1, 2, 3, 4, 5, 6, 7];
 
export default Transpose;
