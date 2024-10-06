import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutUsPage.scss";
import masksImg from "../../images/masksImg.svg";
import paintImg from "../../images/paintImg.svg";
import canvasImg from "../../images/canvasImg.svg";
import workshopImg from "../../images/workshopImg.svg";

export default function AboutUsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <section>
        <p className="section-header">{t("about-us-paragraph")}</p>
      </section>

      <section>
        <h4 className="paragraph-header remove-margin-top">
          <img
            key={"image1"}
            src={workshopImg}
            alt={`image`}
            className="paragraph-image"
          />
          {t("about-workshops")}
        </h4>
        <p className="p-font">{t("about-workshops-paragraph")}</p>
        <h4 className="paragraph-header">
          <img
            key={"image2"}
            src={canvasImg}
            alt={`image`}
            className="paragraph-image"
          />
          {t("your-artwork")}
        </h4>
        <p className="p-font">{t("your-artwork-paragraph")}</p>

        <h4 className="paragraph-header">
          <img
            key={"image3"}
            src={paintImg}
            alt={`image`}
            className="paragraph-image"
          />
          {t("experience")}
        </h4>
        <p className="p-font">{t("experience-paragraph")}</p>

        <h4 className="paragraph-header">
          <img
            key={"image4"}
            src={masksImg}
            alt={`image`}
            className="paragraph-image"
          />
          {t("atmosphere")}
        </h4>
        <p className="p-font">{t("atmosphere-paragraph")}</p>
      </section>
      <section className="background"> 
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Strasho%20Pindzur%207,%20Skopje%201000+(Paint&amp;Wine)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </section>
    </div>
  );
}
