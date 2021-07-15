import React,{useEffect, useState} from 'react';
import {Bar} from "react-chartjs-2";
import classes from "./chart.module.css";
const Chart = () => {
    const [chartData, setChartData] = useState({})

    const chart = () =>{
        setChartData({
            labels:['Answer1', 'Answer2', 'Answer3', 'Answer4',],
            datasets:[
                {
                    label:'Total Person who choose this',
                    data:[32,34,48,88],
                    backgroundColor:[
                        '#38015c'
                    ],
                    borderWidth:5
                }
            ],
           
        })
    }

    useEffect(()=>{
        chart()
    },[])

    return (
        <div className={classes.chart_css_parent}>
            <div className={classes.chart_css_child}>
            <Bar data={chartData}  />
            </div>
        </div>
    )
}

export default Chart
