import React from "react";

import Classes from "./PollQuestion.module.css";
import { Link } from "react-router-dom";
const PollQuestion = (props) => {
  return (
    <div className={Classes.parentPoll}>
      <div className={Classes.childPoll}>
        <Link to={`/poll/${props.id}`}>
          <div className={Classes.childPoll_child}>
            <h1>{props.question}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PollQuestion;
