import { MouseEventHandler, useState } from "react";
import EventItem from "./components/EventItem";
import eventsJSON from 'src/data/events.json';


const Events = ({ search }: { search: string }) => {
  const [data] = useState(eventsJSON);
  const { _embedded: { events } } = data;
  const handleEventItemClick: MouseEventHandler = (id: any) => {
    console.log(id);
  }
  let filteredEvents = events;
  if (search && search.length > 0) {
    filteredEvents = filteredEvents.filter((event) => event.name.toLowerCase().includes(search))
  }
  const eventComponents = filteredEvents.map((event) => {
    return <EventItem
      key={`event-event-item-${event.id}`}
      eventItem={event}
      onEventItemClick={handleEventItemClick}
    />
  });
  return (
    <div>
      {eventComponents}
    </div>
  )
}
export default Events;