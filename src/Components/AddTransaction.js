import React, { Component, Fragment } from "react";
import "./style.css";

class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", amount: 0 };
  }
  inputHandler = (e) => {
    console.log("Hello", e.target.value);
    e.preventDefault();
    if (e.target.id === "text") {
      this.setState({
        text: e.target.value,
      });
    } else {
      this.setState({
        amount: e.target.value,
      });
    }
  };
  render() {
    const addTxn = this.props.addTxn;
    return (
      <Fragment>
        <label>Add New Transaction</label>
        <br />
        <label>Text</label>
        <input
          id="text"
          value={this.state.text}
          type="text"
          onChange={this.inputHandler}
          placeholder="Enter Transaction"
        ></input>
        <label>Amount</label>
        <input
          id="amount"
          value={this.state.amount}
          type="number"
          onChange={this.inputHandler}
          placeholder="Enter amount"
        ></input>
        <button
          className="btn"
          onClick={(event) => addTxn(event, this.state.text, this.state.amount)}
        >
          Submit
        </button>
      </Fragment>
    );
  }
}

export default AddTransaction;
