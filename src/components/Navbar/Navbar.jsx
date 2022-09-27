import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { clearLocalStorage, getToken } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";



function Navbar() {

  const navigate = useNavigate();


  const authLogout = () => {
    clearLocalStorage();
    navigate("/");
    return;
  };

  const token = getToken();
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

            {token && (
              <span>
                <Link to="/create-user" className="account-link">
                  Create User
                </Link>
              </span>
            )}

            {token && (
              <span>
                <button className="btn btn-sm btn-light" onClick={authLogout}>
                  LogOut
                </button>
              </span>
            )}
          </div>
        </nav>
      </>
    );
}

export default Navbar