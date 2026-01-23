import React from "react";
import { useTranslation } from "react-i18next";
import "./TermsAndConditionsPage.scss";
import SEO from "../../components/SEO/SEO";

export default function TermsAndConditionsPage() {
  const { t } = useTranslation();

  return (
    <div className="terms-conditions-page">
      <SEO
        title="Terms and Conditions"
        description="Read our terms and conditions for Paint & Wine Skopje events, bookings, and services."
        url="/terms-conditions"
      />
      <section>
        <h1 className="page-header">{t("terms-conditions-title")}</h1>

        <h2 className="section-title">{t("terms-conditions-intro-title")}</h2>
        <p className="p-font">{t("terms-conditions-intro-text")}</p>

        <h2 className="section-title">{t("terms-conditions-services-title")}</h2>
        <p className="p-font">{t("terms-conditions-services-text")}</p>

        <h2 className="section-title">{t("terms-conditions-bookings-title")}</h2>
        <p className="p-font">{t("terms-conditions-bookings-text")}</p>

        <h2 className="section-title">{t("terms-conditions-payment-title")}</h2>
        <p className="p-font">{t("terms-conditions-payment-text")}</p>

        <h2 className="section-title">{t("terms-conditions-cancellation-title")}</h2>
        <p className="p-font">{t("terms-conditions-cancellation-text")}</p>

        <h2 className="section-title">{t("terms-conditions-behavior-title")}</h2>
        <p className="p-font">{t("terms-conditions-behavior-text")}</p>

        <h2 className="section-title">{t("terms-conditions-liability-title")}</h2>
        <p className="p-font">{t("terms-conditions-liability-text")}</p>

        <h2 className="section-title">{t("terms-conditions-intellectual-title")}</h2>
        <p className="p-font">{t("terms-conditions-intellectual-text")}</p>

        <h2 className="section-title">{t("terms-conditions-modifications-title")}</h2>
        <p className="p-font">{t("terms-conditions-modifications-text")}</p>

        <h2 className="section-title">{t("terms-conditions-contact-title")}</h2>
        <p className="p-font">{t("terms-conditions-contact-text")}</p>
      </section>
    </div>
  );
}
