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
import SEO, { createEventSchema } from "../../components/SEO/SEO";

export default function EventDetail() {
  const { id } = useParams();
  const { events } = useEvents();
  const event = events.find((e) => e.id === id);
  const { t } = useTranslation();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!event) return <div className="event-not-found">Event not found</div>;

  const details = [
    { icon: <CalendarMonthIcon />,   label: t("date-label"),  value: formatDate(event.date),                  wide: false },
    { icon: <AccessTimeIcon />,      label: t("time"),        value: `${event.startTime} – ${event.endTime}`, wide: true  },
    { icon: <CreditCardIcon />,      label: t("price-label"), value: `${event.price} ${t("currency")}`,       wide: false },
    { icon: <FmdGoodOutlinedIcon />, label: t("city-label"),  value: t("city"),                               wide: false },
  ];

  return (
    <>
      <SEO
        title={event.pictureName}
        description={`Join us for "${event.pictureName}" paint and wine event on ${formatDate(event.date)} at ${event.startTime} in Skopje. Price: ${event.price} MKD. Book your spot now!`}
        image={event.media}
        url={`/event/${event.id}`}
        type="event"
        structuredData={createEventSchema(event)}
      />

      <section className="event-container">
        <div className="event-image-container">
          <img className="event-image" src={event.media} alt={event.pictureName} />
        </div>

        <div className="event-details-wrapper">
          <h1 className="event-image-title">{event.pictureName}</h1>

          <div className="event-details-container">
            {details.map(({ icon, label, value, wide }) => (
              <div key={label} className={`event-detail${wide ? " event-detail--wide" : ""}`}>
                <span className="event-detail__icon">{icon}</span>
                <div className="event-detail__body">
                  <span className="event-detail__label">{label}</span>
                  <span className="event-detail__value">{value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="event-reservation-section">
            <p className="reservation-text">{t("reservation-text")}</p>
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