import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEvents } from "../../context/EventsContext";
import "./EventDetail.scss";
import { formatDate } from "../../utils/dateUtils";
import { useTranslation } from "react-i18next";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Button from "../../components/Button/Button";
import Pics from "../../components/Pics/Pics";

export default function EventDetail() {
  const { id } = useParams();
  const { events } = useEvents();
  const event = events.find((event) => event.id === id);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <>
      <section className="event-container">
        <div className="event-image-container">
          <h1 className="event-image-title">{event.pictureName}</h1>
          <img
            className="event-image"
            src={event.media}
            alt={event.pictureName}
          />
        </div>
        <div className="event-details-wrapper">
          <div className="event-details-container">
            <div className="event-detail">
              <p className="event-text">
                <strong className="event-icontext">
                  <CalendarMonthIcon />
                  {t("date-label")}
                </strong>
                {formatDate(event.date)}
              </p>
            </div>
            <div className="event-detail event-detail-time">
              <p className="event-text">
                <strong className="event-icontext">
                  <AccessTimeIcon />
                  {t("time")}
                </strong>
                {event.startTime} - {event.endTime}
              </p>
            </div>
            <div className="event-detail">
              <p className="event-text">
                <strong className="event-icontext">
                  <CreditCardIcon />
                  {t("price-label")}
                </strong>
                {event.price} EUR
              </p>
            </div>
            <div className="event-detail">
              <p className="event-text">
                <strong className="event-icontext">
                  <FmdGoodOutlinedIcon />
                  {t("city-label")}
                </strong>
                Skopje
              </p>
            </div>
          </div>
          <div className="event-reservation-section">
            <p className="reservation-text">
              {t("reservation-text")}
            </p>
            <a
              href="https://www.instagram.com/paintandwineskopje/"
              target="_blank"
              rel="noopener noreferrer"
              className="reservation-button-link"
            >
              <Button title={t("message-us-button")} />
            </a>
          </div>
        </div>
      </section>

      <div className="event-gallery-section">
        <h2 className="gallery-title">{t("fun-moments-title")}</h2>
        <Pics />
      </div>
    </>
  );
}
