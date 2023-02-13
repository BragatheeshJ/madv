import { Button } from "@material-ui/core";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  let Navigate = useNavigate();
  // function handleClick() {
  //   Navigate("/login");
  // }

  const handleLogInOut = () => {
    const userId = localStorage.getItem("id");
    if (userId) {
      localStorage.removeItem("id");
      Navigate("/");
    } else {
      Navigate("/login");
    }
  };

  let user = JSON.parse(window.localStorage.getItem("user-info"));
  console.log(user);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
        <Link className="navbar-brand text-light" to="/">
          <img
            src="favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          -Loan
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link class="nav-item nav-link text-light" to="/">
              {localStorage.getItem("id") ? "" : "Home"}
            </Link>
            <Link class="nav-item nav-link text-light" to="/howtoapply">
              {localStorage.getItem("id") ? "" : "How to Apply"}
            </Link>
            <Link class="nav-item nav-link text-light" to="/about">
              {localStorage.getItem("id") ? "" : "About"}
            </Link>
            <Link class="nav-item nav-link text-light" to="/register">
              {localStorage.getItem("id") ? "" : "Register"}
            </Link>

            <Button
              class=" button-nav nav-item nav-link text-light"
              onClick={handleLogInOut}
            >
              {localStorage.getItem("id") ? "Logout" : "Login"}
            </Button>

            <Link class="nav-item nav-link text-light" to="/contactus">
              {localStorage.getItem("id") ? "Contact-Us" : ""}
            </Link>
            {/* <Link
              class="nav-item nav-link text-light"
              to="/login"
              onClick={handleLogInOut}
            >
              {localStorage.getItem("id") ? "Logout" : "Log in"}
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
