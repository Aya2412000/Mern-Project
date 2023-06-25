import React from "react";
import "./Services.css";
import { useTranslation } from "react-i18next";
import img1 from "../../Shared/assets/main-services/eco-house.png";
import img2 from "../../Shared/assets/main-services/woodworking.png";
import img3 from "../../Shared/assets/main-services/air-conditioning.png";
import img4 from "../../Shared/assets/main-services/cleaning.png";
import img5 from "../../Shared/assets/main-services/paint-roller.png";
import img6 from "../../Shared/assets/main-services/plastering.png";
import img7 from "../../Shared/assets/main-services/faucet.png";
import img8 from "../../Shared/assets/main-services/satellite-dish.png";
import img9 from "../../Shared/assets/main-services/electric-appliance.png";
import img10 from "../../Shared/assets/main-services/maintenance.png";
import Electricity from "../../All-Services/Electricity/Electricity";

export default function Services() {
  const [t, i18n] = useTranslation();

  return (
    <section className="service-main">
      <div className="container">
        <h1 className="simple-border">{t("main-services")}</h1>
        <div className="hLine"></div>
        <div className="row collector">
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
              onClick={<Electricity/>}
            >
              <a href="/electricity">
                <img src={img1} alt="" className="icon" />
              </a>
              <p>{t("electricity")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              <a href="#">
                <img src={img2} alt="" className="icon" />
              </a>

              <p>{t("carpentry")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              <a href="#">
                <img src={img3} alt="" className="icon" />
              </a>

              <p>{t("conditioning")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              <a href="#">
                <img src={img4} alt="" className="icon" />
              </a>

              <p>{t("Cleaning service")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              <a href="#">
                <img src={img5} alt="" className="icon" />
              </a>

              <p>{t("Painting")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              <a href="#">
                <img src={img6} alt="" className="icon" />
              </a>

              <p>{t("Plastering")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              <a href="#">
                <img src={img7} alt="" className="icon" />
              </a>

              <p>{t("Plumbing")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              <a href="#">
                <img src={img8} alt="" className="icon" />
              </a>

              <p>{t("Satellite&Receiver")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              <a href="#">
                <img src={img9} alt="" className="icon" />
              </a>
              <p>{t("Home Appliances")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              <a href="#">
                <img src={img10} alt="" className="icon" />
              </a>
              <p>{t("Cars maintance")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
