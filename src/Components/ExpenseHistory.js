import React from "react";
import Transactions from "./Transactions.js";

class ExpenseHistory extends React.Component {
  render() {
    return (
      <div id="ExpenseHistory">
        <h3> Transaction History</h3>
        <Transactions
          transactions={this.props.transactions}
          deleteTransaction={this.props.deleteTransaction}
        />
      </div>
    );
  }
}
export default ExpenseHistory;
