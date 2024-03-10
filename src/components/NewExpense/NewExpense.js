import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showAddForm, setShowAddForm] = useState(false);

  const hideForm = () => {
    setShowAddForm(false);
  };

  const showForm = () => {
    setShowAddForm(true);
  };

  if (showAddForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          addExpenseFunction={props.addExpenseFunction}
          hideForm={hideForm}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={showForm}> Add Expenses</button>
      </div>
    );
  }
};

export default NewExpense;
