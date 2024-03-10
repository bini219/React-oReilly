import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const Expenseslist = (props) => {
  const displayedExpenses = props.expenses;
  const selectedYear = props.selectedYear;
  if (displayedExpenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses found in year {selectedYear}
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {displayedExpenses.map((e) => (
        <ExpenseItem key={e.id} data={e} />
      ))}
    </ul>
  );
};

export default Expenseslist;
