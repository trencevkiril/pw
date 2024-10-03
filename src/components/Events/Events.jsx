import React from "react";
import { Link } from "react-router-dom";
import { useEvents } from "../../context/EventsContext";
import "./Events.scss";
import { useTranslation } from "react-i18next";
import { formatDate, getDayName } from "../../utils/dateUtils";
import Button from "../Button/Button";

export default function Events() {
  const { events } = useEvents();
  const { t, i18n } = useTranslation();

  return (
    <section id="homepage-events" className="events">
      <div className="header">{t("event-header")}</div>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <div className="date">{formatDate(event.date)}</div>
            <div className="day-time">
              <span>{getDayName(event.date, i18n.language).toUpperCase()}</span>
              <div>
                <span>{event.startTime}</span>
                <span>-</span>
                <span>{event.endTime}</span>
              </div>
            </div>
            <div className="image-container">
              <img src={event.media} className="image" alt={event.city} />
            </div>
            <div className="picutre-name">{event.pictureName}</div>
            <div className="price">{event.price}.00 EUR</div>
            <div className="button-container">
              <Link to={`/event/${event.id}`}>
                <Button title={t("reserve")} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
