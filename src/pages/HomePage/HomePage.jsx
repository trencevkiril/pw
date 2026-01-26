import React from "react";
import wineDrinkPic from "../../images/homePage/drinkWine.jpeg";
import paintPic from "../../images/homePage/paint.png";
import couplePic from "../../images/homePage/couplePaint.png";
import "./HomePage.scss";
import { useTranslation } from "react-i18next";
import Events from "../../components/Events/Events";
import GoogleReviews from "../../components/GoogleReviews/GoogleReviews";
import Pics from "../../components/Pics/Pics";
import SEO, { organizationSchema } from "../../components/SEO/SEO";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <SEO
        url="/"
        structuredData={organizationSchema}
      />
      <section className="picture-section-container">
        <img src={wineDrinkPic} className="picture-section" alt="turtlesPic" loading="lazy" />
        <img src={couplePic} className="picture-section" alt="facePic" loading="lazy" />
        <img src={paintPic} className="picture-section" alt="winePic" loading="lazy" />
      </section>
      <section className="text-header">
        <div className="picture-section-header">
          <div>{t("picture-section-header")}</div>
          <div>{t("picture-section-header-2")}</div>
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
