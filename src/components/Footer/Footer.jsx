import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.scss";
import logo from "../../images/logo.png";

export default function Footer() {
  const { t } = useTranslation();
  const googleMapsUrl = "https://www.google.com/maps/place/Paint%26Wine/data=!4m2!3m1!1s0x0:0xe968d15ed59c16d9?sa=X&ved=1t:2428&ictx=111";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <Link to="/">
            <img src={logo} alt="Paint & Wine Logo" className="footer-logo-img" />
          </Link>
        </div>

        <div className="footer-section footer-contact">
          <h3>{t("footer-contact")}</h3>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
          >
            Strasho Pindzur 7, Skopje 1000
          </a>
          <a href="tel:+38978246264" className="footer-phone">
            078 246 264
          </a>
          <a href="mailto:info@paintandwineskopje.com" className="footer-email">
            info@paintandwineskopje.com
          </a>
        </div>

        <div className="footer-section footer-links">
          <h3>{t("footer-policy")}</h3>
          <Link to="/privacy-policy" className="footer-link">
            {t("footer-privacy-policy")}
          </Link>
          <Link to="/terms-conditions" className="footer-link">
            {t("footer-terms-conditions")}
          </Link>
        </div>

        <div className="footer-section footer-social">
          <h3>{t("footer-follow-us")}</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/paintandwineskopje1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/paintandwineskopje/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
