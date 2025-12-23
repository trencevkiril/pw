import React from "react";
import Pics from "../../components/Pics/Pics";
import { useTranslation } from "react-i18next";
import "./GalleryPage.scss";

export default function GalleryPage() {
  const { t } = useTranslation();

  return (
    <div>
      <section>
        <h1 className="page-header">{t("paragraph4")}</h1>
      </section>
      <Pics />
    </div>
  );
}
