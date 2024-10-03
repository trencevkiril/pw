import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import "./i18n";
import "./index.scss";
import { EventsProvider } from "./context/EventsContext";

import HomePage from "./pages/HomePage/HomePage";
import EventsPage from "./pages/EventsPage/EventsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import EventDetail from "./pages/EventDetail/EventDetail";

function App() {
  return (
    <EventsProvider>
      <Router>
        <Hero />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/event/:id" element={<EventDetail />} /> 
        </Routes>
      </Router>
    </EventsProvider>
  );
}

export default App;
