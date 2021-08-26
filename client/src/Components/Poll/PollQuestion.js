import React, { useState } from "react";
import {  useHistory } from "react-router-dom";
import Chart from "../Result/Chart";
import classes from "./PollQuestion.module.css";

import { PollResult } from "./helper/pollRoutes";
const PollQuestion = (props) => {
  const [index, setIndex] = useState();
  // const params = useParams();
  const history = useHistory();
  const onValueChange = (event) => {
    setIndex(event.target.value);
  };

  const submitHandler = (e) => {
    const { id } = props;
    e.preventDefault();
    PollResult({  _id:id,index })
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          <Chart dat={data.obj} />
          console.log(data);
          history.push(`/poll/${props.id}/result`);
        }
      })
      .catch(console.log("Error in voting"));

    console.log(index);
  };

  

  return (
    <div className={classes.parentPoll}>
      <div className={classes.childPoll}>
        <div className={classes.childPoll_child}>
          <h1>{props.title}</h1>
          <div>
            <form onSubmit={submitHandler}>
              <div className={classes.parentFormDiv}>
                <div className={classes.childFormDiv}>
                  <label>
                    <input
                      type="radio"
                      value="1"
                      checked={index === "1"}
                      onChange={onValueChange}
                    />
                    {props.choices[0].choice}
                  </label>
                </div>
                <div className={classes.childFormDiv}>
                  <label>
                    <input
                      type="radio"
                      value="2"
                      checked={index === "2"}
                      onChange={onValueChange}
                    />
                    {props.choices[1].choice}
                  </label>
                </div>
                <div className={classes.childFormDiv}>
                  <label>
                    <input
                      type="radio"
                      value="3"
                      checked={index === "3"}
                      onChange={onValueChange}
                    />
                    {props.choices[2].choice}
                  </label>
                </div>
                <div className={classes.childFormDiv}>
                  <label>
                    <input
                      type="radio"
                      value="4"
                      checked={index === "4"}
                      onChange={onValueChange}
                    />
                    {props.choices[3].choice}
                  </label>
                </div>
                <button className={classes.buttonForm}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollQuestion;
