import React, { Component } from 'react';
import './item.css';

class Item extends Component {

  render() {
    return (
      <div className="Item">
        {this.props.data.name}, {(this.props.data.code)} <br />
        {this.props.data.quantity}, quantity <br />
        {this.props.data.price}, price
      </div>
    );
  }
}

export default Item;
