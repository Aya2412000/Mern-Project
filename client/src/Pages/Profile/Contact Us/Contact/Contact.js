import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";
import imgContactUs from "../../../../Shared/assets/images/contact-us.svg";
import { useTranslation } from "react-i18next";
import img from "../../../../Shared/assets/images/speech-bubble.png";
export default function Contact() {
  const [t, i18n] = useTranslation();
  if (i18n.language == "en") {
    document.body.style.direction = "ltr";
  } else if (i18n.language == "ar") {
    document.body.style.direction = "rtl";
  }
  return (
    <div>
      <div class="contact-us">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>{t("Connect with us")}</h1>
              <p>{t("Welcome")}</p>
              <label>
                <FontAwesomeIcon icon={faPhone} className="icon-img" />
                0223499386
              </label>
              <label>
                <FontAwesomeIcon icon={faEnvelope} className="icon-img" />{" "}
                info@Herfa.com
              </label>
              <div class="sm-icons">
                <a href="#" target="_blank">
                  <FontAwesomeIcon className="icon-social" icon={faFacebook} />
                </a>
                <a href="#" target="_blank">
                  <FontAwesomeIcon className="icon-social" icon={faTwitter} />
                </a>
                <a href="#" target="_blank">
                  <FontAwesomeIcon className="icon-social" icon={faInstagram} />
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <img src={img} alt="contact-us" className="connection" />
            </div>
          </div>
          <div class="email-us">
            <h2 class="sm-btm"> {t("Send us your message")}</h2>
            <div className="hline-contact"></div>
            <form method="POST">
              <div class="row">
                <div class="col-md-6">
                  <input
                    maxlength="40"
                    required=""
                    type="text"
                    placeholder={t("Name")}
                    name="name"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    maxlength="20"
                    type="tel"
                    placeholder={t("phone number")}
                    name="phone"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    maxlength="50"
                    required=""
                    type="email"
                    placeholder={t("email")}
                    name="email"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    maxlength="100"
                    type="text"
                    placeholder={t("subject")}
                    name="subject"
                  />
                </div>
                <div class="col-md-12">
                  <textarea
                    maxlength="300"
                    required=""
                    placeholder={t("Write your message here")}
                    name="message"
                  ></textarea>
                </div>
                <div class="col-md-12">
                  <p class="confirmation-msg"></p>
                </div>
                <div class="col-md-12">
                  <button class="btn-co" type="submit">
                    {t("send the message")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
