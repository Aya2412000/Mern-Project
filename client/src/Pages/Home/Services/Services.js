import React from "react";
import "./Services.css";
// import { useTranslation } from "react-i18next";
import img1 from "../../../Shared/assets/main-services/eco-house.png";
import img2 from "../../../Shared/assets/main-services/woodworking.png";
import img3 from "../../../Shared/assets/main-services/air-conditioning.png";
import img4 from "../../../Shared/assets/main-services/cleaning.png";
import img5 from "../../../Shared/assets/main-services/paint-roller.png";
import img6 from "../../../Shared/assets/main-services/plastering.png";
import img7 from "../../../Shared/assets/main-services/faucet.png";
import img8 from "../../../Shared/assets/main-services/satellite-dish.png";
import img9 from "../../../Shared/assets/main-services/electric-appliance.png";
import { useTranslation } from "react-i18next";
export default function Services() {
  const [t, i18n] = useTranslation();

  return (
    <section className="service-main">
      <div className="container">
        <h1 className="simple-border">{t("main-services")}</h1>
        <div className="hLine"></div>
        <div className="row collector">
          {/* {OurServicesDate.map((item) => {
            return (
              <ServicesItems
                icon={item.icon}
                work={item.work}
                alt={item.alt}
                key={item.id}
              />
            );
          })}
        </div> */}
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              <img src={img1} alt="" className="icon" />

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
              <img src={img2} alt="" className="icon" />

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
              <img src={img3} alt="" className="icon" />

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
              <img src={img4} alt="" className="icon" />

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
              <img src={img5} alt="" className="icon" />

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
              <img src={img6} alt="" className="icon" />

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
              <img src={img7} alt="" className="icon" />

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
              <img src={img8} alt="" className="icon" />

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
              <img src={img9} alt="" className="icon" />

              <p>{t("Home Appliances")}</p>
            </div>
          </div>
          
           
        </div>
      </div>
    </section>
  );
}
