import React, { createContext, useState, useContext, useEffect } from "react";
import { client, urlFor } from "../lib/sanityClient";

const EventsContext = createContext();

export function EventsProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "event"] | order(date asc) {
          _id,
          pictureName,
          image,
          date,
          startTime,
          endTime,
          price,
          status,
          info,
          maxNumberOfPeople,
          availableSpotsLeft
        }`;

        const data = await client.fetch(query);

        // Transform Sanity data to match the existing event structure
        const transformedEvents = data.map((event) => ({
          id: event._id,
          pictureName: event.pictureName,
          media: event.image ? urlFor(event.image).width(600).quality(80).format('webp').url() : '',
          date: event.date,
          startTime: event.startTime,
          endTime: event.endTime,
          price: event.price,
          status: event.status,
          info: event.info,
          maxNumberOfPeople: event.maxNumberOfPeople,
          availableSpotsLeft: event.availableSpotsLeft,
        }));

        // Sort events: FREE first (by date), then BOOKED last (by date)
        const sortedEvents = transformedEvents.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });

        setEvents(sortedEvents);
        setError(null);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <EventsContext.Provider value={{ events, setEvents, loading, error }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  return useContext(EventsContext);
}
