import { useState } from "react";
import classes from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results

    let currentSavings = Number(userInput.currentSavings); // feel free to change the shape of this input object!
    const yearlyContribution = Number(userInput.yearlySavings); // as mentioned: feel free to change the shape...
    const expectedReturn = Number(userInput.expectedInterest / 100);
    const duration = Number(userInput.investmentDuration);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...

    return yearlyData;
  };

  const initialInputData = {
    currentSavings: 0,
    yearlySavings: 0,
    expectedInterest: 0,
    investmentDuration: 0,
  };
  const [inputData, setInputData] = useState(initialInputData);

  const onChangeHandler = (input, type) => {
    setInputData((prevState) => {
      return { ...prevState, [type]: input };
    });
  };
  const resetHandler = () => {
    setInputData(initialInputData);
    props.addInvestment([]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const investmentDetails = calculateHandler(inputData);
    props.addInvestment(investmentDetails);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) => onChangeHandler(e.target.value, "currentSavings")}
            value={inputData.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) => onChangeHandler(e.target.value, "yearlySavings")}
            value={inputData.yearlySavings}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) =>
              onChangeHandler(e.target.value, "expectedInterest")
            }
            value={inputData.expectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) =>
              onChangeHandler(e.target.value, "investmentDuration")
            }
            value={inputData.investmentDuration}
          />
        </p>
      </div>
      <div className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </div>
    </form>
  );
};

export default InvestmentForm;
