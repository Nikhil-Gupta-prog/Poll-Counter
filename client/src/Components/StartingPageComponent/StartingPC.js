import React from "react";
import classes from "./StartingPC.module.css";
import { Link } from "react-router-dom";
import { isAutheticated } from "../Auth/helper/authRoutes";

const StartingPC = () => {
  return (
    <div className={classes.main_home}>
      <div className={classes.parent_box}>
        <div className={classes.child_box }>
          <h1 >
            POLL COUNTER
          </h1>
        </div>
      {!isAutheticated() && <div className={classes.parent_button_div}>
          <Link
            to="/signup"
            className={classes.btn}
           
          >
            SignUp
          </Link>
        </div>}
       {!isAutheticated() && <p className={classes.home_login}>
          If you have existing account
          <span className={classes.home_login_link}>
          <Link to="/signin">login</Link>

          </span>
        </p>}
      </div>
    </div>
  );
};

export default StartingPC;
