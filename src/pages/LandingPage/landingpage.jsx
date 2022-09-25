import React from "react";
import "./landingpage.css";
// import { RiFolderLockLine } from "react-icons/ri";
// import { AiOutlineTransaction } from "react-icons/ai";
// import { GrTransaction } from "react-icons/gr";
// import { BiCheckShield } from "react-icons/bi";
// import { GrFacebookOption } from "react-icons/gr";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { GrLinkedinOption } from "react-icons/gr";
// import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import headerImage from "./images/header_image.png";
// import happyGirl from "./images/happy_girl.png";
// import transaction from "./images/Transaction.png";
// import ellipse19 from "./images/Ellipse 19.png";
// import ellipse20 from "./images/Ellipse 20.png";
// import line from "./images/Line 1.png";
// import Login from "../Login/login";

function LandingPage() {
  return (
    <>
      <nav>
        <ul>
          <div>
            <li className="logo">ShikiniMoney</li>
          </div>
          <div className="navbar">
            <Link to="#">
              <li>Home</li>
            </Link>
            <Link to="#">
              <li>Features</li>
            </Link>
            <Link to="#">
              <li>About</li>
            </Link>
            <Link to="#">
              <li>Contact Us</li>
            </Link>
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
          <h1>Quick and easy payment platform for all your transactions</h1>
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
