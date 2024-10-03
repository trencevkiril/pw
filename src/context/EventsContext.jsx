import React, { createContext, useState, useContext } from "react";
import { mockEvents } from "../mockData/events";

const EventsContext = createContext();

export function EventsProvider({ children }) {
  const [events, setEvents] = useState(mockEvents);

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  return useContext(EventsContext);
}
