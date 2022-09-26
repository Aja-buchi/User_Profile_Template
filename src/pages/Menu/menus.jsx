import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import './menus.css';
import locationImage from "./marker.png";
import Navbar from "../../components/Navbar/Navbar";


export default function Menu(){

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
      return navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      }, (error) => {
        alert("Error code: " + error.message);
      })

  }, [latitude, longitude])

    return (
      <>
        <Navbar />

        <main>
          <img src={locationImage} className="image" />
          <p>Your current location latitude is : {latitude}</p>
          <p>Your current location longitude is : {longitude}</p>
        </main>
      </>
    );
}