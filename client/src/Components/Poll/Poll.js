import React, { useState } from "react";
import classes from "./Poll.module.css";

import Polls from "./PollList";
import PollQuestion from "./PollQuestion";

const Poll = () => {
  const [polls, setPolls] = useState(Polls);
  return (
    <>
      <h3 className={classes.Poll_Page_heading}>Here is Your Poll</h3>

    <div className={classes.all_list}>
      {polls.map((poll) => {
        const { id, question, answer } = poll;
        return (
          <li key={id} className={classes.list}>
          <PollQuestion  id={id} question={question} answer={answer} />
          </li>
        );
      })}
    </div>
    </>
  );
};

export default Poll;
