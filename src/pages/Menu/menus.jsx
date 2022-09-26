import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import './menus.css';
import locationImage from "./marker.png";
import Navbar from "../../components/Navbar/Navbar";


export default function Menu(){

  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(() => {
      return navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
      }, (error) => {
        console.log(error);
      })

    }, [])
  })

  console.log(location);
    return (
      <>
        <Navbar/>

        <main>
          <img src={locationImage} className="image" />
          <p>Your current location is : {location}</p>
        </main>
      </>
    );
}