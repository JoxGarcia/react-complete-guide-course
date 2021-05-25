import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  let barFillHeigh = "0%";

  if (props.maxValue > 0) {
    barFillHeigh = Math.round((props.value / props.maxValue) * 100) + "%";
    console.log(barFillHeigh);
    console.log(props.value);
    console.log("maxvalue", props.maxValue);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeigh }} />
      </div>
      <div className="char-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
