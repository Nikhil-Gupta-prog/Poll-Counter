import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { signup } from "./helper/authRoutes";
import classes from  "./SignUpComponent.module.css";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    lastname:"",
    phone:"",
    email: "",
    password: "",
    error: "",
    success: false
  });
  const history = useHistory()

  const { name,lastname,phone, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name,lastname,phone, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            lastname:"",
            phone:"",
            email: "",
            password: "",
            error: "",
            success: true,
          });
          history.push('/poll')
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <section className={classes.auth}>
        <form  onSubmit = {submitHandler} >
          <h1>Sign Up</h1>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange("name")}
              type="text"
              id="name"
              value={name}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="lastName">Lastname</label>
            <input
              onChange={handleChange("lastname")}
              id="lastName"
              type="text"
              value={lastname}
            />
            </div>
            <div className={classes.control}>
            <label htmlFor="number">Contact</label>
            <input
              onChange={handleChange("phone")}
              id="number"
              type="number"
              value={phone}
            />
            </div>

          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              onChange={handleChange("email")}
              type="email"
              value={email}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange("password")}
              id="password"
              type="password"
              value={password}
            />
          </div>
          <div className={classes.actions}>
            <button >Create Account</button>

            <Link to="/signin" className={classes.toggle}>Log in with existing account!</Link>
          </div>
        </form>
      </section>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/">Login Here</Link>
          </div>
        </div>
      </div>
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

  return (
    <div>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </div>
  );
};

export default Signup;
