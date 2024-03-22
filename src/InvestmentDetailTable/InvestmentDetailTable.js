import classes from "./InvestmentDetailTable.module.css";

const InvestmentDetailTable = (props) => {
  const investments = props.investments;
  console.log("list", investments);
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investments != undefined &&
          investments.map((investment) => (
            <tr>
              <td>{investment.year}</td>
              <td>{investment.yearlyContribution}</td>
              <td>{investment.yearlyInterest}</td>
              <td>{investment.savingsEndOfYear}</td>
              <td>TOTAL INVESTED CAPITAL</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default InvestmentDetailTable;
