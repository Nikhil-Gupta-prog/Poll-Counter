import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAutheticated, signout } from "../Auth/helper/authRoutes";
import "./MainNavigation.css";
import { useHistory } from "react-router-dom";

const MainNavigation = () => {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);

  const toggle = () => {
    setShow((prevState) => !prevState);
  };

  const changeNavBar = () => {
    if (window.scrollY >= 10) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  window.addEventListener("scroll", changeNavBar);
  return (
    

    <nav
      className={
        change
          ? "navbar navbar-b navbar-trans navbar-expand-md  parent  "
          : "navbar navbar-b navbar-trans navbar-expand-md "
      }
      id="mainNav"
    >
      <div className="container-fluid ">
        <button
          onClick={toggle}
          className={
            show ? " navbar-toggler " : " navbar-toggler ms-auto collapsed"
          }
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div
          className={
            !show
              ? "navbar-collapse collapse justify-content-end"
              : " navbar-b navbar-trans tog_nav nav-link:before navbar-b navbar-reduce nav-link:before"
          }
          id="navbarDefault"
        >
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item   ">
              <Link to="/" className="nav-link   ">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/about" className="nav-link ">
                About
              </Link>
            </li>
          { isAutheticated() && <li className="nav-item ">
              <Link to="/Poll" className="nav-link ">
                Poll
              </Link>
            </li>}
            { isAutheticated() && <li className="nav-item ">
              <Link to="/poll/:pollId/result" className="nav-link ">
                Result
              </Link>
            </li>}
              {!isAutheticated() &&
                <li className="nav-item">
                  <Link to="/signin"  className="nav-link text-warning" >
                      Login
                  </Link>
                </li>
              }
           { isAutheticated() && <li className="nav-item">
              <span
                className="nav-link text-warning"
                onClick={() => {
                  signout(() => {
                    history.push("/");
                  });
                }}
              >
                Signout
              </span>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
