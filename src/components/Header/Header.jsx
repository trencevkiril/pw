import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../images/logo.png";
import { useTranslation } from "react-i18next";
import { Twirl as Hamburger } from "hamburger-react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      setCurrentLang(lng);
    });

    return () => {
      i18n.off("languageChanged");
    };
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "mk" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="header-container">
      <Link to="/" className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="menu-items">
        <div className="desktop-menu">
          <Link to="/" className="item">{t("home")}</Link>
          <Link to="/events" className="item">{t("events")}</Link>
          <Link to="/gallery" className="item">{t("gallery")}</Link>
          <Link to="/contact-us" className="item">{t("contact")}</Link>
          <Link to="/about-us" className="item">{t("about-us")}</Link>
          <div className="item" onClick={toggleLanguage}>
            {currentLang === "en" ? "MK" : "ENG"}
          </div>
        </div>

        <div className="mobile-menu">
          <div className={"hamburger-open"}>
            <Hamburger
              size={24}
              toggled={isMenuOpen}
              toggle={toggleMenu}
              color={"white"}
            />
          </div>
          {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
          <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="side-menu-contents">
              <Link to="/" onClick={toggleMenu}>{t("home")}</Link>
              <Link to="/events" onClick={toggleMenu}>{t("events")}</Link>
              <Link to="/gallery" onClick={toggleMenu}>{t("gallery")}</Link>
              <Link to="/contact-us" onClick={toggleMenu}>{t("contact")}</Link>
              <Link to="/about-us" onClick={toggleMenu}>{t("about-us")}</Link>
              <div onClick={toggleLanguage}>
                {currentLang === "en" ? "MK" : "ENG"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
