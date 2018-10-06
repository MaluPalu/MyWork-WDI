import React, { Component } from 'react';

export default class Account extends Component {

  constructor (props) {

    super(props);

    this.state = {
      balance: ''

    }
  }

  handleDepositClick(e) {
    e.preventDefault();
    // set a local variable to the amount entered in the text box.
    let amount = this.inputBox.value;
    // set a local variable to the new balance based off of the original balance + amount
    let newBalance = this.state.balance + amount;
    // set the balance to the newBalance using the setState method (necessary)
    this.setState({
      balance: newBalance
    })
    // empty out the text box in this component
    this.inputBox.value = '';
  }

  handleWithdrawClick(e) {
    e.preventDefault();
    let amount = this.inputBox.value;
    let newBalance = this.state.balance - amount;
    if(amount > this.state.balance){
      return;
    } else {
      this.setState({
        balance: newBalance
      })
    }
    this.inputBox.value = '';
  }

  handleSendToCheckingClick(e) {
    
  }



  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" onClick={(e) => this.handleDepositClick(e)} value="Deposit" />
        <input type="button" onClick={(e) => this.handleWithdrawClick(e)} value="Withdraw" />
        <input type="button" onClick={(e) => this.handleSendToOtherClick(e)} value={this.props.which} />
      </div>
    )
  }
}
