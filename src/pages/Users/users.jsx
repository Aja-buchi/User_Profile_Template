import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Users() {
    return (
      <>
        <Navbar />

        <section>

            <h1 className="text-center">List Of Users</h1>

            <table className="table m-4">
                <thead>
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Email</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Avatar</th>
                    {/* <th scope="col"></th> */}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </section>
      </>
    );
}

export default Users