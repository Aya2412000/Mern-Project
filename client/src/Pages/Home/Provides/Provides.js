import React from "react";
import "./Provides.css";
 import { useTranslation } from "react-i18next";
import img1 from "../../../Shared/assets/images/man2.png";
import { Link } from "react-router-dom";
export default function Provides() {
   const [t, i18n] = useTranslation();

  return (
    <section class="services-is-provider">
      <div class="container">
        <div class="provider-box">
          <div class="row">
            <div class="col-md-5">
              <div class="lazyload-wrapper ">
                <img src={img1} alt="our service" />
              </div>
            </div>
            <div class="col-md-7">
              <div class="provider-desc">
                <h1 class="simple-border">{t("Are you a craftsman?")}</h1>
                <p>{t("text")}</p>
                <Link class="text-center" to="/signAsProvider">
                  <button>{t("Become a service provider")}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="user-mob"></div>
      </div>
    </section>
  );
}
