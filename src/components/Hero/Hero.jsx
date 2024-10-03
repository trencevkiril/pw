import "./Hero.scss";
import React from "react";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import { useLocation, matchPath } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();
  const location = useLocation();

  const getHeroContent = () => {

    const isEventDetail = matchPath({ path: "/event/:id" }, location.pathname)

    if (isEventDetail) {
      return {
        heading: t("event-detail-heading"),
        subHeading: t("event-detail-sub-heading"),
      };
    }

    switch (location.pathname) {
      case "/events":
        return {
          heading: t("events-heading"),
          subHeading: t("events-sub-heading"),
        };
      case "/gallery":
        return {
          heading: t("gallery-heading"),
          subHeading: t("gallery-sub-heading"),
        };
      case "/contact-us":
        return {
          heading: t("contact-heading"),
          subHeading: t("contact-sub-heading"),
        };
      case "/about-us":
        return {
          heading: t("about-heading"),
          subHeading: t("about-sub-heading"),
        };
      default:
        return {
          heading: t("home-heading"),
          subHeading: t("home-sub-heading"),
          showButton: true,
          buttonText: t("explore-events"),
        };
    }
  };

  const {
    heading,
    subHeading,
    showButton = false,
    buttonText = "",
  } = getHeroContent();

  const handleScrollToEvents = () => {
    const eventsSection = document.getElementById("homepage-events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container">
      <Header />
      <section className="section hero-section">
        <h1>{heading}</h1>
        <div className="sub-heading">{subHeading}</div>
        {showButton && (
          <Button title={buttonText} onClick={handleScrollToEvents} />
        )}
      </section>
    </div>
  );
}
