import React, { useState } from "react";
import LOGIN from "./LOG/LOGIN";
import Profile from "../Profile/Profile";
import axios from "axios";
import Navbar from "../../Components/Nav-bar/Navbar"
import { useCookies } from "react-cookie";
import Footer from "../../Components/Footer/Footer";
export default function LogIn() {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const removeCookies = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("adminId");
    window.location.reload(false);
  };

  return <div>{cookies.access_token ? <Profile /> :
    (<>
      <Navbar/>
      <LOGIN />
      <Footer/>
    </>)
  
  }</div>;
}
