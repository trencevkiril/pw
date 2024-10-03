import React from "react";
import Pics from "../../components/Pics/Pics";
import { useTranslation } from "react-i18next";
import "./GalleryPage.scss";

export default function GalleryPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="paragraphs">
        <section>
          <p>{t("paragraph4")}</p>
        </section>
      </div>
      <div>
        <Pics />
      </div>
    </div>
  );
}
