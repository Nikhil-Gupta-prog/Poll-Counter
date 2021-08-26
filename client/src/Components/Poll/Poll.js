import React, { useState, useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Poll.module.css";

import PollQuestion from "./PollQuestion";

const Poll = () => {
  const [polls, setPolls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pollLength , setpollLength] = useState(polls.length)

  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/show", {
        method: "GET",
        mode: "cors",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Something Went Wrong!");
      }
      const responseData = await response.json();
      const loadedData = [];
      for (const index in responseData) {
        loadedData.push({
          id: responseData[index]._id,
          title: responseData[index].title,
          choices: responseData[index].choices,
          key: responseData[index]._id,
        });
      }
      setPolls(loadedData);
      setIsLoading(false);
    };
    fetchQuestions().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (polls.length === 0) {
    return (
     <div className={classes.emptyList}>
        <h2 className={classes.emptyList_line}>
          You have already voted on all polls , please check again later....
        </h2>
        </div>
    );
  }
  if (isLoading) {
    return (
      <section className={classes.spinner}>
        <h2>
          <LoadingSpinner />
        </h2>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <>
      <h3 className={classes.Poll_Page_heading}>Here are Your Polls</h3>

      <div className={classes.all_list}>
        {polls.map((poll) => {
          const { id, title, choices } = poll;

          return (
            <>
            <li key={id} className={classes.list}>
              <PollQuestion id={id} key={id} title={title} choices={choices} />
            </li>
            
            </>
          );
        })}
        ;
      </div>
    </>
  );
};

export default Poll;
