import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (addedExpense) => {
    setExpenses((prevState) => {
      return [...prevState, addedExpense];
    });
  };

  return (
    <div>
      <NewExpense addExpenseFunction={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
