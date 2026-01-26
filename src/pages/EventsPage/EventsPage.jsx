import Events from "../../components/Events/Events";
import SEO from "../../components/SEO/SEO";

export default function EventsPage() {
  return (
    <div>
      <SEO
        title="Upcoming Events"
        description="Browse and book upcoming paint and wine events in Skopje. Join our creative workshops and create your own masterpiece while enjoying wine with friends."
        url="/events"
      />
      <Events />
    </div>
  )
}
