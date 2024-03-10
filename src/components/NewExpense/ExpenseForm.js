import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    setExpense((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const amuontChangeHandler = (e) => {
    setExpense((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setExpense((prevState) => {
      return { ...prevState, date: new Date(e.target.value) };
    });
  };

  const submmithandler = (event) => {
    event.preventDefault();

    const createdExpense = { ...expense, id: Math.random().toString() };
    console.log("created", createdExpense);
    props.addExpenseFunction(createdExpense);
    setExpense((prevState) => {
      return { title: "", amount: "", date: "" };
    });
    props.hideForm();
  };

  return (
    <form onSubmit={submmithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expense.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expense.amount}
            onChange={amuontChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required="true"
            type="date"
            min="2019-01-01"
            value={expense.date}
            max={new Date().toISOString().split("T")[0]}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={() => props.hideForm()}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
