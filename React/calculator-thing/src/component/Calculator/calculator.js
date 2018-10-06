import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {

  constructor (props) {

    super(props);

    this.state = {
      numDisplay: '',
      lastNum: '',
      lastOperator: '',
      isOpButtPressed: false
    }
  }

  handleNumButtPressed(e, numPressed) {
    if (this.state.isOpButtPressed === true) {
      this.setState({
        isOpButtPressed: false,
        numDisplay: numPressed
      });
    } else {
    this.setState({
      numDisplay: this.state.numDisplay + numPressed
    });
  }
  }

  handleOpButtPressed(e, opPressed) {
    var localLastNum = 0;
    this.setState({
      isOpButtPressed: true
    });
    if (this.state.lastNum !== '' && this.state.lastOperator !== '') {
      switch(this.state.lastOperator) {
        case '+':
          localLastNum = parseFloat(this.state.lastNum) + parseFloat(this.state.numDisplay);
          break;
        case '-':
          localLastNum = parseFloat(this.state.lastNum) - parseFloat(this.state.numDisplay);
        break;
        case 'x':
          localLastNum = parseFloat(this.state.lastNum) * parseFloat(this.state.numDisplay);
        break;
        case '/':
          localLastNum = parseFloat(this.state.lastNum) / parseFloat(this.state.numDisplay);
        break;
        case '=':
          opPressed = this.state.lastOperator
        break;
        default:
        break;
      }
    }
    else {
      localLastNum = parseFloat(this.state.numDisplay);
  }
  this.setState({
    lastNum: localLastNum.toString(),
    lastOperator: opPressed,
    numDisplay: localLastNum
  });
}

handleSpecialOpButtPressed(e, specialOperator) {
  var localNum = 0;
  this.setState({
    lastOperator: true
  });
  if (this.state.numDisplay !== '') {
    switch(specialOperator) {
      case 'x2':
      localNum = parseFloat(Math.pow(this.state.numDisplay, 2))
      break;
      case 'x3':
      localNum = parseFloat(Math.pow(this.state.numDisplay, 3))
      break;
      case 'plus/minus':
      localNum = parseFloat(-Math.abs(this.state.numDisplay))
      break;
      default:
      break;
  }
}
  this.setState({
    numDisplay: localNum.toString()
  });
}

handleClearButtPressed(e) {
  this.setState({
    numDisplay: '',
    lastNum: '',
    lastOperator: '',
    isOpButtPressed: false
  });
}

  render() {
    return (
      <div className="calcComp">
        <div className="calculator">
      <input type="text" className="numDisplay" value={this.state.numDisplay}/>
        <div className="buttons">
          <div className="keys">
      <button className="number"onClick={ (e) => this.handleNumButtPressed(e, '1') }>1</button>
      <button className="number"onClick={ (e) => this.handleNumButtPressed(e, '2') }>2</button>
      <button className="number"onClick={ (e) => this.handleNumButtPressed(e, '3') }>3</button>
      <button className="number"onClick={ (e) => this.handleNumButtPressed(e, '4') }>4</button>
      <button className="number"onClick={ (e) => this.handleNumButtPressed(e, '5') }>5</button>
      <button className="number"onClick={ (e) => this.handleNumButtPressed(e, '6') }>6</button>
      <button className="number"onClick={ (e) => this.handleNumButtPressed(e, '7') }>7</button>
      <button className="number"onClick={ (e) => this.handleNumButtPressed(e, '8') }>8</button>
      <button className="number"onClick={ (e) => this.handleNumButtPressed(e, '9') }>9</button>
      <button className="number"onClick={ (e) => this.handleNumButtPressed(e, '0') }>0</button>
      <button className="operator"onClick={ (e) => this.handleOpButtPressed(e, '=') }>=</button>
      <button className="operator"onClick={ (e) => this.handleOpButtPressed(e, '+') }>+</button>
      <button className="operator"onClick={ (e) => this.handleOpButtPressed(e, '-') }>-</button>
      <button className="operator"onClick={ (e) => this.handleOpButtPressed(e, '/') }>/</button>
      <button className="operator"onClick={ (e) => this.handleOpButtPressed(e, 'x') }>x</button>
      <button className="operator"onClick={ (e) => this.handleClearButtPressed(e, 'AC') }>AC</button>
      <button className="operator"onClick={ (e) => this.handleSpecialOpButtPressed(e, 'plus/minus') }>+/-</button>
      <button className="operator"onClick={ (e) => this.handleSpecialOpButtPressed(e, 'x2') }>x2</button>
      <button className="operator"onClick={ (e) => this.handleSpecialOpButtPressed(e, 'x3') }>x3</button>
      <button className="operator"onClick={ (e) => this.handleNumButtPressed(e, '3.141592653589793') }>π</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
