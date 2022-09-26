import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <>
        <nav className="navbar-list">
          <h3 className="navbar--list">ShikiniMoney</h3>
          <div className="details">
            <span>
              <Link to="/users" className="users-link">
                Users
              </Link>
            </span>
            <span>
              <Link to="/profile" className="account-link">
                My Account
              </Link>
            </span>
          </div>
        </nav>
      </>
    );
}

export default Navbar