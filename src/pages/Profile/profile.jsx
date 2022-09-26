import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./profile.css";

function Profile() {
  return (
    <div>
      <Navbar />

      <section>
        <h1 className="profile-text">Profile</h1>

        <div className="profile-card">
          <div className="profile-img">
            <img src="" alt="avatar" />
          </div>

          <div className="profile-content">
            <div className="profile-email">
              <label htmlFor="email">Email</label> <br />
              <div>
                <input type="email" value="myEmail@email.com" />
                <span>
                  <button type="button" className='edit-btn'
                  
                  >Edit</button>
                </span>
                <span>
                  <button type="button" className='delete-btn'>Delete</button>
                </span>
              </div>
            </div>

            <div className="profile-firstName">
              <label htmlFor="email">Email</label> <br />
              <input type="text" value="FirstName" />
            </div>

            <div className="profile-lastName">
              <label htmlFor="email">Email</label> <br />
              <input type="text" value="LastName" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile