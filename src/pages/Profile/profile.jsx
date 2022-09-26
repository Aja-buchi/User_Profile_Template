import React, { useEffect, useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import "./profile.css";


function Profile() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [img, setImg] = useState('');
    const [edit, setEdit] = useState(false);


    useEffect(() => {
        async function getUser(){
            const response = await fetch("https://reqres.in/api/users/2");
            // console.log(response);
            const data = await response.json();
            // console.log(data);
            if(response.status === 200) {
                setEmail(data.data.email);
                setFirstName(data.data.first_name);
                setLastName(data.data.last_name);
                setImg(data.data.avatar);
            }
        }

        getUser();
    }, [firstName, lastName])


    // const reqBody = {email, }

    const handleEdit = async () => {
        console.log("edit this please!");
        const resp = await fetch ("https://reqres.in/api/users/2", {

        })
        setEdit(true);

    }

    const handleDelete = () => {
      console.log("delete this please!");
    };

    

  return (
    <div>
      <Navbar />

      <section>
        <h1 className="profile-text">Profile</h1>

        <div className="profile-card">
          <div className="profile-img">
            <img src={img} alt="avatar" />
          </div>

          <div className="profile-content">
            <div className="profile-email">
              <label htmlFor="email">Email</label> <br />
              <div>
                <input type="email" value={email}/>
                <span>
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                </span>
                <span>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </span>
              </div>
            </div>

            <div className="profile-firstName">
              <label htmlFor="email">FirstName</label> <br />
              <input type="text" value={firstName} />
            </div>

            <div className="profile-lastName">
              <label htmlFor="email">LastName</label> <br />
              <input type="text" value={lastName} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile