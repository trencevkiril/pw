import React from "react";
import Pics from "../../components/Pics/Pics";
import { useTranslation } from "react-i18next";
import "./GalleryPage.scss";
import SEO from "../../components/SEO/SEO";

export default function GalleryPage() {
  const { t } = useTranslation();

  return (
    <div>
      <SEO
        title="Gallery"
        description="Browse our gallery of paint and wine events in Skopje. See the amazing artwork created by our guests and the fun atmosphere at our workshops."
        url="/gallery"
      />
      <section>
        <h1 className="page-header-gallery">{t("paragraph4")}</h1>
        <h1 className="page-header-gallery-2">{t("paragraph5")}</h1>
      </section>
      <Pics />
    </div>
  );
}
