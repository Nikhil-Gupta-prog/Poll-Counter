import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import classes from "./chart.module.css";

const Chart = (props) => {
  const [chartData, setChartData] = useState({});
  const [option, setOption] = useState([]);
  const [ansData, setAnsData] = useState([]);

  const chart = async () => {
    let choiceLabel = [];
    let choiceVote = [];

    const response = await fetch("http://127.0.0.1:8000/api/poll", {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Something Went Wrong!");
    }
    const responseData = await response.json();
    console.log(responseData.choices);
    for (const dataObj in responseData.choices) {
      choiceVote.push(responseData.choices[dataObj].votes);
      choiceLabel.push(responseData.choices[dataObj].choice);
    }
    
    setAnsData(choiceVote);
    setOption(choiceLabel);

    setChartData({
      labels: [choiceLabel[0], choiceLabel[1], choiceLabel[2], choiceLabel[3]],
      datasets: [
        {
          label: "Total Person who choose this",
          data: [choiceVote[0], choiceVote[1], choiceVote[2], choiceVote[3]],
          backgroundColor: ["#38015c"],
          borderWidth: 5,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className={classes.chart_css_parent}>
      <div className={classes.chart_css_child}>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default Chart;
