import React from "react";
import { Link } from "react-router-dom";
import Aboutimg from "../../Images/Aboutus.jpg";
import Contactimg from "../../Images/Contactus.jpg";
import Howtoapplyimg from "../../Images/Howtoapplyimg.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <h1>
          <center className="landingpage">
            <h1 className="h">
              Welcome to <b>M-Advisor</b>
            </h1>
          </center>
        </h1>
        <p className="paragraph text-light">
          Planning to take a Mortgage Loan? Use this Mortgage Loan EMI Calculator
          <br />
          to estimate the EMI amount payable per month to repay the Mortgage
          <br />
          Loan. The Mortgage Loan EMI Calculator is easy to use. All you need to
          <br />
          select is the Loan amount, Loan Tenure. After selecting the Loan
          <br />
          Amount, and The Loan Tenure, the calculator will estimate the monthly
          <br />
          EMI amount and the total Interest payable till the end of the loan
          tenure.
        </p>
      </div>
    </div>
  );
};

export default Home;

