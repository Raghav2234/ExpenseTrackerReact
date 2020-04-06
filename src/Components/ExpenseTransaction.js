import React from "react";
import AmountDisplay from "./AmountDisplay.js";
import AddTransaction from "./AddTransaction.js";

class ExpenseTransaction extends React.Component {
  render() {
    return (
      <div id="ExpenseTransaction">
        <h3>Your Balance</h3>
        <h2>$ {this.props.income - this.props.expense}</h2>
        <AmountDisplay
          income={this.props.income}
          expense={this.props.expense}
        />
        <br />
        <AddTransaction addTxn={this.props.addTxn} />
      </div>
    );
  }
}
export default ExpenseTransaction;
