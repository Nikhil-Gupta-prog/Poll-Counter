import React, { useState } from "react";
import { useParams,useHistory } from "react-router-dom";
import { PollResult} from "../Poll/helper/pollRoutes";
import classes from  "./PollDetailsComponent.module.css";
import Polls from "../Poll/PollList";

const PollResultComponent = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [pollDetails, setPollDetails] = useState(Polls);
  const params = useParams();
  const history = useHistory();

  const onValueChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    PollResult({selectedOption})
    history.push(`/poll/${params.pollId}/result`)
    console.log(selectedOption);
  };

  const question = pollDetails.find(
    (question) => question.id === params.pollId
  );
  if(!question){
   return <p>No Question Available</p>
  }
  return (
    <div className={classes.parentResultDiv}>
     
          <div className={classes.childResultDiv}>
            <h4>{question.question}</h4>
            <form onSubmit={submitHandler}>
              <div className={classes.parentFormDiv}>
                <div className={classes.childFormDiv}>
                  <label>
                    <input
                      type="radio"
                      value="ans1"
                      checked={selectedOption === "ans1"}
                      onChange={onValueChange}
                    />
                    {question.answers[0]}
                  </label>
                </div>
                <div className={classes.childFormDiv}>
                  <label>
                    <input
                      type="radio"
                      value="ans2"
                      checked={selectedOption === "ans2"}
                      onChange={onValueChange}
                    />
                    {question.answers[1]}
                  </label>
                </div>
                <div className={classes.childFormDiv}>
                  <label>
                    <input
                      type="radio"
                      value="ans3"
                      checked={selectedOption === "ans3"}
                      onChange={onValueChange}
                    />
                    {question.answers[2]}
                  </label>
                </div>
                <div className={classes.childFormDiv}>
                  <label>
                    <input
                      type="radio"
                      value="ans4"
                      checked={selectedOption === "ans4"}
                      onChange={onValueChange}
                    />
                    {question.answers[3]}
                  </label>
                </div>
                <button className={classes.buttonForm}>Submit</button>
              </div>
            </form>
          </div>
        
       
      </div>
    
  );
};

export default PollResultComponent;
