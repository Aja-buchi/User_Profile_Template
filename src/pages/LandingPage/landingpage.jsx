import React from "react";
import "./landingpage.css";
import { Link } from "react-router-dom";
import headerImage from "../../Assets/images/header_image.png";

function LandingPage() {
  return (
    <>
      <nav>
        <ul>
          <div>
            <li className="logo">ShikiniMoney</li>
          </div>
          <div className="navbar">
            
          </div>
          <div className="register-nav">
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/signup">
              <li>Create an account</li>
            </Link>
          </div>
        </ul>
      </nav>

      <header id="main-header">
        <div className="header-head">
          <h1>Hi, Buchi here!<br></br>
            I am your BOT to help you navigate through the platform.
            Let's get you signed up first</h1>
          <p className="header-body">
            Save and manage all your transactions in one place, easy payment
            anytime and any day
          </p>
          <div>
            <Link to="/signup">Create an account</Link>
          </div>
        </div>
        <div className="header-img">
          <img
            src={headerImage}
            alt="Man happily doing transaction"
            className="img"
          />
        </div>
      </header>
    </>
  );
}

export default LandingPage;
