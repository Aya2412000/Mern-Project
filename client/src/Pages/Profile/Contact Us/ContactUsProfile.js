import React from "react";
import NavProfile from "../../../Components/Nav-profile/NavProfile";
import Contact from "./Contact/Contact";
import Footer from "../../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function ContactUsProfile() {
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/contactUsProfile":
        document.getElementById("title").innerHTML = "Contact-Us";
        break;
      default:
        document.getElementById("title").innerHTML = "defa";
    }
  }, [location]);
  return (
    <div>
      <NavProfile />
      <Contact />
      <Footer />
    </div>
  );
}
