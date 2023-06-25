import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavbarProfile from "../../Components/Nav-profile/NavProfile";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Electricity.css";
export default function Electricity() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <NavbarProfile />
      <div className="Main-container">
        <h1>Electricity</h1>

        {/* Welcome,{" "} */}
        <div className="row users">
          {userData.length > 0 &&
            userData.map((user) => (
              <div className=" craft-elec" key={user.id}>
                {user.username} <br />
                tel: {user.phone}
                <br />
                {user.email}
                <br />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
