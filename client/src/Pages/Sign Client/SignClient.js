import React from "react";
import SignUpClient from "./SignClient/SignUpClient";
import Navbar from "../../Components/Nav-bar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function SignClient() {
  return (
    <div>
      <Navbar />
      <SignUpClient />
      <Footer />
    </div>
  );
}
