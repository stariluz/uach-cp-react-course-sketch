import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJSON from 'src/data/events.json';


const Events = () => {
  const [data] = useState(eventsJSON);
  const { _embedded: { events } } = data;
  const eventComponents = events.map((event) => {
    return <EventItem key={`event-event-item-${event.id}`} eventItem={event} />
  })
  return (
    <div>
      {eventComponents}
    </div>
  )
}
export default Events;