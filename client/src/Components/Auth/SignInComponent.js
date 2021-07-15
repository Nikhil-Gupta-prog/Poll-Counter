import React, { useState } from "react";
import classes from  "./SignUpComponent.module.css";


import { Redirect,Link } from "react-router-dom";

import { signin, authenticate, isAutheticated } from "./helper/authRoutes";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const submitHandler = (event )=> {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      
        return <Redirect to="/poll" />;
      }
    
    
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <section className={classes.auth}>
          <form onSubmit={submitHandler}>
          <h1>Login</h1>

            <div className={classes.control}>
              <label htmlFor="email" >Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                id="email"
                type="email"
              />
            </div>

            <div className={classes.control}>
              <label htmlFor="password" >Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                id="password"
                type="password"
              />
            </div>
            <div className={classes.actions}>
           <button>Login</button>
           <Link to="/signup" className={classes.toggle}>Create New Account</Link>
       </div>
          </form>
        
      </section>
    );
  };

  return (
    <div >
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}

      
    </div>
  );
};

export default Signin;
