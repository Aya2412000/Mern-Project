import React from "react";
import "./Maps.css";
 import { useTranslation } from "react-i18next";
export default function Maps() {
   const [t, i18n] = useTranslation();
  return (
    <div className="container Main-container">
      <h1 className="simple-border"> {t("We are everywhere")}</h1>
      <div className="hline-map"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110532.90343727803!2d31.45573572771925!3d30.032461475529864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583c1380cba7ef%3A0xd541260e9e06978d!2z2YXYr9mK2YbYqSDZhti12LHYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1681755958844!5m2!1sar!2seg"
        height="450"
        className="Map"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
