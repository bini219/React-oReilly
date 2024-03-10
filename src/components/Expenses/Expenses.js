import { useState } from "react";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import Expenseslist from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const filterExpenses = (year) => {
    console.log("All Expenses", expenses, year);
    setSelectedYear(year);
  };

  const expenses = props.expenses;
  const displayedExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        filterExpenses={filterExpenses}
        selectedyear={selectedYear}
      />
      <Expenseslist expenses={displayedExpenses} selectedYear={selectedYear} />
    </Card>
  );
};
export default Expenses;
