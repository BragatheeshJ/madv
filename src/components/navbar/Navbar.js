import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            <img
              src="favicon.ico"
              aria-label="favicon"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            <b>-Advisor</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/howtoapply">
                  How to Apply
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/faqs">
                  FAQS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/emicheck">
                  Emi-Check
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/propertydetails">
                  Property Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/contactus">
                  Contact-Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
