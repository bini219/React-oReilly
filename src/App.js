import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "1",
      title: "chekes",
      date: new Date(),
      amount: 70.21,
    },
    {
      id: "2",
      title: "Alkol",
      date: new Date(),
      amount: 7.21,
    },
    {
      id: "3",
      title: "Bill",
      date: new Date(),
      amount: 500.21,
    },
  ];

  return (
    <div>
      <h1>Hello Cellare</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
