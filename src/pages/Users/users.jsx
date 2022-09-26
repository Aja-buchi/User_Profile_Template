import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import './users.css';

function Users() {

    const [id, setId] = useState(1);
    const [usersList, setUsersList] = useState([]);

    let totalPageCount;
    useEffect(() => {
        const getListOfUser = async() => {
            const response = await fetch("https://reqres.in/api/users?page=" + `${id}`);
            console.log(response);
            const data = await response.json();
            console.log(data);
            console.log(data.data);
            setUsersList(data.data);
            if(response.status === 200) {
                setUsersList(data.data)

                // console.log(usersList);
                totalPageCount = data.total_pages;

                // console.log(totalPageCount);
            }
        }


        getListOfUser();
    }, [id])

    const handlePageIncrease = () => {
        if(id === totalPageCount) {
            return;
        }
        setId((prevState) => {
            return prevState + 1;
        });
        console.log("it works!")
    };

    const handlePageDecrease = () => {
        if (id == 1) {
          return;
        }
        setId((prevState) => {
          return prevState - 1;
        });
    };


    return (
      <>
        <Navbar />

        <section>
          <h1 className="text-center p-4">List Of Users</h1>

          <table className="table m-4">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Email</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Avatar</th>
              </tr>
            </thead>

            <tbody>
              {usersList.map((user) => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.email}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.avatar}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="btn-container">
            <button type="button" onClick={handlePageDecrease}>Prev</button>
            <button type="button" onClick={handlePageIncrease}>Next</button>
          </div>
        </section>
      </>
    );
}

export default Users