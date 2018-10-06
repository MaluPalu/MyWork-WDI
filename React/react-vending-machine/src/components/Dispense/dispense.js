import React, { Component } from 'react';
import './dispense.css';

class Dispense extends Component {

  dispense(e) {
    console.log("This mu'fucka works");
    this.props.onDispense(e);
  }

  render() {
    return (
      <div className="Item">
        <button onClick={(e) => this.dispense(e)} >Dispense</button>
      </div>
    );
  }
}

export default Dispense;
