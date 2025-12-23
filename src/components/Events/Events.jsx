import React from "react";
import { Link } from "react-router-dom";
import { useEvents } from "../../context/EventsContext";
import "./Events.scss";
import { useTranslation } from "react-i18next";
import { formatDate, getDayName } from "../../utils/dateUtils";
import Button from "../Button/Button";

export default function Events({ limit, showMoreButton = false }) {
  const { events, loading, error } = useEvents();
  const { t, i18n } = useTranslation();

  const displayedEvents = limit ? events.slice(0, limit) : events;

  return (
    <section id="homepage-events" className="events">
      <h1 className="page-header">{t("event-header")}</h1>
      <div className="event-list">
        {loading ? (
          <p>Loading events...</p>
        ) : error ? (
          <p>Error loading events: {error}</p>
        ) : displayedEvents.length === 0 ? (
          <p>No events available</p>
        ) : (
          displayedEvents.map((event) => (
            <div key={event.id} className="event-item">
              <div className="date">{formatDate(event.date)}</div>
              <div className="day-time">
                <span>{getDayName(event.date, i18n.language, t).toUpperCase()}</span>
                <div>
                  <span>{event.startTime}</span>
                  <span>-</span>
                  <span>{event.endTime}</span>
                </div>
              </div>
              <Link to={`/event/${event.id}`} className="image-container">
                <img src={event.media} className="image" alt={event.city} />
              </Link>
              <Link to={`/event/${event.id}`} className="picutre-name">
                {event.pictureName}
              </Link>
              <div className="price">{event.price}.00 EUR</div>
            </div>
          ))
        )}
      </div>
      {showMoreButton && events.length > limit && (
        <div className="see-more-container">
          <Link to="/events" onClick={() => window.scrollTo(0, 0)}>
            <Button title={t("see-more-events")} />
          </Link>
        </div>
      )}
    </section>
  );
}
