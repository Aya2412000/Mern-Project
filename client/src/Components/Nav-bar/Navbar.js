import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import img1 from "../../Shared/assets/main-services/repair-tool.png";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import {
  faEarthOceania,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
  const [navBg, setNavBg] = useState("transparent");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setNavBg("transparent");
    } else {
      setNavBg("linear-gradient(#a39d8f, #fff)");
    }
  });
  const [t, i18n] = useTranslation();
  if (i18n.language == "en") {
    document.body.style.direction = "ltr";
  } else if (i18n.language == "ar") {
    document.body.style.direction = "rtl";
  }
  return (
    <div style={{ background: navBg }}>
      <div className="Main-container">
        <nav className="navbar navbar-expand-lg bg-body-transparent ">
          <div className="container-fluid">
            <a className=" Logo" href="/">
              {t("LOGO")}
            </a>
            {/* <img src={img1} alt="" className="Logo-icon" /> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-box">
                <li className="nav-item">
                  <NavLink
                    className=" nav-link Nav "
                    aria-current="page"
                    exact
                    to="/"
                    activeClassName="active"
                  >
                    {t("Home")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className=" nav-link"
                    exact
                    to="/about-us"
                    activeClassName="active"
                  >
                    {t("Who-us")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className=" nav-link"
                    exact
                    to="/contactUs"
                    activeClassName="active"
                  >
                    {t("Contact-us")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className=" nav-link"
                    exact
                    to="/blog"
                    activeClassName="active"
                  >
                    {t("Blog")}
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 in-search"
                  type="search"
                  placeholder={t("Search-placeholder")}
                  aria-label="Search"
                />
                <button className="btn btn-search" type="submit">
                  {t("Search-btn")}
                </button>
              </form>
              {i18n.language == "en" && (
                // <button
                //   onClick={() => {
                //     i18n.changeLanguage("ar");
                //   }}
                //   className="btn Lan btn-info"
                //   type="submit"
                // >
                //   AR
                // </button>
                <FontAwesomeIcon
                  icon={faEarthOceania}
                  onClick={() => {
                    i18n.changeLanguage("ar");
                  }}
                  className="btn Lan "
                />
              )}
              {i18n.language == "ar" && (
                // <button
                //   onClick={() => {
                //     i18n.changeLanguage("en");
                //   }}
                //   className="btn Lan btn-info"
                //   type="submit"
                // >
                //   EN
                // </button>
                <FontAwesomeIcon
                  icon={faEarthOceania}
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                  className="btn Lan "
                />
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
