import React from "react";
import "./style.css";

const IncomeLabel = {
  color: "#00ff00",
  paddingTop: "10px",
};

const ExpenseLabel = {
  color: "#ff0000",
  paddingTop: "10px",
};

class AmountDisplay extends React.Component {
  render() {
    return (
      <div id="AmountDisplay">
        <div id="Income">
          <label>Income</label>
          <label style={IncomeLabel}>$ {this.props.income}</label>
        </div>
        <div id="Expense">
          <label> Expense</label>
          <label style={ExpenseLabel}>$ {this.props.expense}</label>
        </div>
      </div>
    );
  }
}

export default AmountDisplay;
