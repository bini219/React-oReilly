import InvestmentDetailTable from "./InvestmentDetailTable/InvestmentDetailTable";
import InvestmentForm from "./InvestmentForm/InvestmentForm";
import Header from "./Header/Header";
import { useState } from "react";

function App() {
  const [investments, setInvestments] = useState([]);

  const addInvestment = (input) => {
    setInvestments(input);
    console.log("investments", input);
  };
  return (
    <div>
      <Header />
      <InvestmentForm addInvestment={addInvestment} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {investments.length == 0 ? (
        <p style={{ textAlign: "center" }}>No investments to show here</p>
      ) : (
        <InvestmentDetailTable investments={investments} />
      )}
    </div>
  );
}

export default App;
