import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./Pages/HomePage";
import PollPage from "./Pages/PollPage";

import About from "./Pages/About";

import NotFoundPage from "./Pages/NotFoundPage";
import Result from "./Pages/Result";
import Aos from "aos";
import "aos/dist/aos.css";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import { isAutheticated } from "./Components/Auth/helper/authRoutes";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        {isAutheticated() && (
          <Route path="/poll" exact>
            <PollPage />
          </Route>
        )}

        {isAutheticated() && (
          <Route path="/poll/:pollId/result" exact>
            <Result />
          </Route>
        )}

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default withRouter(App);
