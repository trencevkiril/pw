import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "Paint & Wine Skopje";
const DEFAULT_TITLE = "Paint & Wine Skopje | Art & Wine Events in Macedonia";
const DEFAULT_DESCRIPTION = "Придружете се на нашите креативни работилници за сликање со вино во Скопје. Создадете уметност додека уживате во пријатна атмосфера.";
const SITE_URL = "https://paintandwine.mk";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  structuredData,
}) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const pageUrl = url ? `${SITE_URL}${url}` : SITE_URL;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="mk_MK" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Pre-built structured data for the organization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Paint & Wine Skopje",
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: "+389-78-246-264",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Strasho Pindzur 7",
    addressLocality: "Skopje",
    postalCode: "1000",
    addressCountry: "MK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.9981,
    longitude: 21.4254,
  },
  image: DEFAULT_IMAGE,
  sameAs: [
    "https://www.instagram.com/paintandwineskopje/",
    "https://www.facebook.com/paintandwineskopje/",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "18:00",
    closes: "23:00",
  },
};

// Helper to create event structured data
export function createEventSchema(event) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.pictureName,
    description: `Paint & Wine event featuring "${event.pictureName}" painting in Skopje, Macedonia.`,
    image: event.media,
    startDate: `${event.date}T${event.startTime}:00`,
    endDate: `${event.date}T${event.endTime}:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Paint & Wine Skopje",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Strasho Pindzur 7",
        addressLocality: "Skopje",
        postalCode: "1000",
        addressCountry: "MK",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Paint & Wine Skopje",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: event.price,
      priceCurrency: "MKD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/event/${event.id}`,
    },
  };
}
