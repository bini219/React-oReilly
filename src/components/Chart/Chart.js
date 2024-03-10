import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.dataPoints.map((dp) => dp.value);
  console.log("Vlaues", values);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
