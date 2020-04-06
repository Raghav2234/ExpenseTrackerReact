import React from "react";
import Transaction from "./Transaction.js";

class Transactions extends React.Component {
  render() {
    return this.props.transactions.map((transaction) => (
      <Transaction
        txn={transaction}
        deleteTransaction={this.props.deleteTransaction}
      />
    ));
  }
}
export default Transactions;
