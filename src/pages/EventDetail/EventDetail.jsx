import React from "react";
import { useParams } from "react-router-dom";
import { useEvents } from "../../context/EventsContext";
import "./EventDetail.scss";
import { formatDate, getDayName } from "../../utils/dateUtils";
import { useTranslation } from "react-i18next";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CardMUI from "../../components/Card/Card";

export default function EventDetail() {
  const { id } = useParams();
  const { events } = useEvents();
  const event = events.find((event) => event.id === id);
  const { t } = useTranslation();

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
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
          <div className="event-detail">
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
        <CardMUI spotsLeft={event.availableSpotsLeft}/>
      </div>
    </section>
  );
}
