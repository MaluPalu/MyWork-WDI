import React, { Component } from 'react';
import './select.css';

class Select extends Component {

  inputChanged(e) {
    console.log(e.target.value);
    this.props.onSelectionInput(e.target.value);

  }

  render() {

    return (
      <div className="Select">
        <input type="text" maxLength="2" onInput={(e) => this.inputChanged(e)} placeholder="Enter Code" />
      </div>
    );
  }
}

export default Select;
