import React, { Component } from "react";
import ExpenseTransaction from "./Components/ExpenseTransaction.js";
import ExpenseHistory from "./Components/ExpenseHistory.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      expense: 0.0,
      income: 0.0,
      id: 0,
    };
  }

  deleteTransaction = (event, id, amount) => {
    const filteredItems = this.state.transactions.filter(
      (item) => item.id !== id
    );
    this.setState({
      transactions: filteredItems,
    });
    if (amount > 0) {
      this.setState({
        income: parseInt(this.state.income) - parseInt(amount),
      });
    } else {
      this.setState({
        expense: parseInt(this.state.expense) + parseInt(amount),
      });
    }
  };

  addTxn = (event, text, amount) => {
    console.log(text);
    const list = [
      ...this.state.transactions,
      { msg: text, price: amount, id: this.state.id++ },
    ];
    console.log(this.state.id);
    this.setState({
      transactions: list,
    });
    if (amount > 0) {
      this.setState({
        income: parseInt(this.state.income) + parseInt(amount),
      });
    } else {
      this.setState({
        expense: (parseInt(this.state.expense) + parseInt(amount)) * -1,
      });
    }
  };

  render() {
    return (
      <div id="main">
        <h1> Expense Tracker</h1>
        <div className="App">
          <ExpenseTransaction
            income={this.state.income}
            expense={this.state.expense}
            addTxn={this.addTxn}
          />
          <ExpenseHistory
            transactions={this.state.transactions}
            deleteTransaction={this.deleteTransaction}
          />
        </div>
      </div>
    );
  }
}

export default App;
