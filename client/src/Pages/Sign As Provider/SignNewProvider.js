import React from "react";
import Navbar from "../../Components/Nav-bar/Navbar";
import SignAsProvider from "./Signup/SignAsProvider";
import Footer from "../../Components/Footer/Footer";

export default function SignNewProvider() {
  return (
    <div>
      <Navbar />
      <SignAsProvider />
      <Footer />
    </div>
  );
}
