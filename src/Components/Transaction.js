import React from "react";
import "./style.css";

class Transaction extends React.Component {
  render() {
    return (
      <div
        className="transactionStyle"
        onClick={(e) =>
          this.props.deleteTransaction(
            e,
            this.props.txn.id,
            this.props.txn.price
          )
        }
      >
        <p>{this.props.txn.msg}</p>
        <p>{this.props.txn.price}</p>
      </div>
    );
  }
}

export default Transaction;
