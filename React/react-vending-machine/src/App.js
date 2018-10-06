import React, { Component } from 'react';
import Item from './components/Items/item';
import Select from './components/Select/select';
import Dispense from './components/Dispense/dispense';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      items: [
        {
          name: "Coca Cola",
          price: 50,
          quantity: 10,
          code: "A1"
        }, {
          name: "Sprite",
          price: 50,
          quantity: 10,
          code: "B2"
        }, {
          name: "Mr. Pibb",
          price: 75,
          quantity: 10,
          code: "C3"
        }
      ],
      balance: 0,
      selectedItem: null,
    };
  }

  addBalance(amount) {
    this.setState({
      balance: this.state.balance + amount
    });
  }

  selectionInput(selection) {
    // look through the state.items for an item with that code
    let selectedItem = this.state.items.find(item => item.code === selection);
    console.log("selected item is ", selectedItem)
    this.setState({
      selectedItem: selectedItem
    })
  }

  dispenseItem(dispense) {
    let selectedItem = this.state.selectedItem;
    if(selectedItem.price === this.state.balance && selectedItem.quantity > 0) {
      selectedItem.quantity = selectedItem.quantity - 1;
      this.forceUpdate();
  } else {
    return;
  }
  }


  render() {
    let itemElements = this.state.items.map((e,i) => <Item data={e} key={i} />);
    let balanceDisplay = this.state.balance || "Insert Coin"

    return (
      <div className="App">
        <p className="display -sm-width">{balanceDisplay}</p>
        <div className="Selected">
        <p>{this.state.selectedItem == null ? "Please Select Item" : this.state.selectedItem.name + " selected"}</p>
        </div>
        <button onClick={(e) => this.addBalance(5)} className="button -yellow">05c</button>
        <button onClick={(e) => this.addBalance(10)} className="button -blue">10c</button>
        <button onClick={(e) => this.addBalance(25)} className="button -green">25c</button> <br />
        <Select onSelectionInput={this.selectionInput.bind(this)}/>
        <Dispense onDispense={this.dispenseItem.bind(this)}/>
        <br />
        {itemElements}
      </div>
    );
  }
}

export default App;
