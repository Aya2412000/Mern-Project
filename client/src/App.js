import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Components/Main.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import SignNewProvider from "./Pages/Sign As Provider/SignNewProvider";
import Electricity from "./All-Services/Electricity/Electricity";
import SignClient from "./Pages/Sign Client/SignClient";
import LogIn from "./Pages/LogIn/LogIn";
import ContactUs from "./Pages/Contact Us/ContactUs";
import Profile from "./Pages/Profile/Profile";

import ContactUsProfile from "./Pages/Profile/Contact Us/ContactUsProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signAsProvider" element={<SignNewProvider />} />
        <Route exact path="/signup" element={<SignClient />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/contactUsProfile" element={<ContactUsProfile />} />
        <Route exact path="/electricity" element={<Electricity />} />
        
      </Routes>
    </BrowserRouter>
  );
}
