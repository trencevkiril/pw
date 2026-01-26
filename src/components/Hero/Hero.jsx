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
        heading: "",
        hideContent: true,
      };
    }

    switch (location.pathname) {
      case "/events":
        return {
          heading: "",
          hideContent: true,
        };
      case "/gallery":
        return {
          heading: "",
          hideContent: true,
        };
      case "/contact-us":
        return {
          heading: "",
          hideContent: true,
        };
      case "/about-us":
        return {
          heading: "",
          hideContent: true,
        };
      case "/privacy-policy":
        return {
          heading: "",
          hideContent: true,
        };
      case "/terms-conditions":
        return {
          heading: "",
          hideContent: true,
        };
      default:
        return {
          heading: t("home-heading"),
          showButton: true,
          buttonText: t("explore-events"),
        };
    }
  };

  const {
    heading,
    showButton = false,
    buttonText = "",
    hideContent = false,
  } = getHeroContent();

  const handleScrollToEvents = () => {
    const eventsSection = document.getElementById("homepage-events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`hero-container ${hideContent ? 'hero-compact' : ''}`}>
      <Header />
      {!hideContent && (
        <section className="section hero-section">
          <h1>{heading}</h1>
          {showButton && (
            <Button title={buttonText} onClick={handleScrollToEvents} />
          )}
        </section>
      )}
    </div>
  );
}
