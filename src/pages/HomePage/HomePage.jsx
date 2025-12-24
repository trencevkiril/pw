import React from "react";
import turtlesPic from "../../images/turtles.webp";
import winePic from "../../images/wine.webp";
import facePic from "../../images/face.webp";
import "./HomePage.scss";
import { useTranslation } from "react-i18next";
import Events from "../../components/Events/Events";
import GoogleReviews from "../../components/GoogleReviews/GoogleReviews";
import Pics from "../../components/Pics/Pics";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <section className="picture-section-container">
        <img src={turtlesPic} className="picture-section" alt="turtlesPic" loading="lazy" />
        <img src={winePic} className="picture-section" alt="winePic" loading="lazy" />
        <img src={facePic} className="picture-section" alt="facePic" loading="lazy" />
      </section>
      <section className="text-header">
        <div className="picture-section-header">
          {t("picture-section-header")}
        </div>
        <div className="paragraphs">
          <p>{t("paragraph1")}</p>
          <p>{t("paragraph2")}</p>
          {/* <p>{t("paragraph3")}</p> */}
        </div>
      </section>
      <Events limit={3} showMoreButton={true} />
      <div className="paragraphs">
        <section>
          <p>{t("paragraph4")}</p>
        </section>
      </div>
      <Pics />
      <GoogleReviews />
    </div>
  );
}
