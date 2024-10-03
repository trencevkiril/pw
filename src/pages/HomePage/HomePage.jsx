import React from "react";
import turtlesPic from "../../images/turtles.png";
import winePic from "../../images/wine.png";
import facePic from "../../images/face.png";
import "./HomePage.scss";
import { useTranslation } from "react-i18next";
import Events from "../../components/Events/Events";
import Pics from "../../components/Pics/Pics";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <section className="picture-section-container">
        <img src={turtlesPic} className="picture-section" alt="turtlesPic" />
        <img src={winePic} className="picture-section" alt="winePic" />
        <img src={facePic} className="picture-section" alt="facePic" />
      </section>
      <section className="text-header">
        <div className="picture-section-header">
          {t("picture-section-header")}
        </div>
        <div className="paragraphs">
          <p>{t("paragraph1")}</p>
          <p>{t("paragraph2")}</p>
          <p>{t("paragraph3")}</p>
        </div>
      </section>
      <Events />
      <div className="paragraphs">
        <section>
          <p>{t("paragraph4")}</p>
        </section>
      </div>
      <Pics />
    </div>
  );
}
