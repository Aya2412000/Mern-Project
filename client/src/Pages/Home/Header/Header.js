import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function Header() {
  const [t, i18n] = useTranslation();

  return (
    <div>
      <div className="parent">
        <div className="Header">
          <div className="content">
            <span className="title" id="title1">
              {i18n.language == "ar" ? "حِرفيين" : "Professional"}
            </span>
            <br />
            <span className="title" id="title2">
              {i18n.language == "en" ? "Craftsmen" : "متخصصين"}
            </span>
            <h4 className="title" id="title3">
              {t("at the highest level")}
            </h4>
            {/* Button in styled */}
            <div className="button">
              <Link to="/login">
                <button className="btn-In" id="btn-In">
                  {t("Login")}
                </button>
              </Link>
              <Link to="/register">
                <button className="btn-Up" id="btn-Up">
                  {t("Signup")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
