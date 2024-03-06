import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      {expenses.map((e) => (
        <ExpenseItem key={e.id} data={e} />
      ))}
    </Card>
  );
};
export default Expenses;
