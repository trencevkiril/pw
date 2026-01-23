import React from "react";
import { useTranslation } from "react-i18next";
import "./PrivacyPolicyPage.scss";
import SEO from "../../components/SEO/SEO";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <div className="privacy-policy-page">
      <SEO
        title="Privacy Policy"
        description="Read our privacy policy to understand how Paint & Wine Skopje collects, uses, and protects your personal information."
        url="/privacy-policy"
      />
      <section>
        <h1 className="page-header">{t("privacy-policy-title")}</h1>

        <h2 className="section-title">{t("privacy-policy-intro-title")}</h2>
        <p className="p-font">{t("privacy-policy-intro-text")}</p>

        <h2 className="section-title">{t("privacy-policy-info-collection-title")}</h2>
        <p className="p-font">{t("privacy-policy-info-collection-text")}</p>

        <h2 className="section-title">{t("privacy-policy-info-use-title")}</h2>
        <p className="p-font">{t("privacy-policy-info-use-text")}</p>

        <h2 className="section-title">{t("privacy-policy-data-protection-title")}</h2>
        <p className="p-font">{t("privacy-policy-data-protection-text")}</p>

        <h2 className="section-title">{t("privacy-policy-cookies-title")}</h2>
        <p className="p-font">{t("privacy-policy-cookies-text")}</p>

        <h2 className="section-title">{t("privacy-policy-third-party-title")}</h2>
        <p className="p-font">{t("privacy-policy-third-party-text")}</p>

        <h2 className="section-title">{t("privacy-policy-your-rights-title")}</h2>
        <p className="p-font">{t("privacy-policy-your-rights-text")}</p>

        <h2 className="section-title">{t("privacy-policy-contact-title")}</h2>
        <p className="p-font">{t("privacy-policy-contact-text")}</p>
      </section>
    </div>
  );
}
