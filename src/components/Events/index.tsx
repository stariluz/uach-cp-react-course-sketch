import { MouseEventHandler } from "react";
import EventItem from "./components/EventItem";
import useEventsData from "src/hooks/useEventsData";

import eventSyle from './Events.modules.css';

const Events = ({ search }: { search: string }) => {
  const { events, error, isLoading } = useEventsData();
  const handleEventItemClick: MouseEventHandler = (id: any) => {
    console.log(id);
  }
  const renderEvents = (): JSX.Element => {
    let filteredEvents = events;
    if (search && search.length > 0) {
      filteredEvents = filteredEvents.filter((event: any) => event.name.toLowerCase().includes(search))
    }
    let filteredEventsItems = filteredEvents.map((event: any) => {
      return <EventItem
        key={`event-event-item-${event.id}`}
        eventItem={event}
        onEventItemClick={handleEventItemClick}
      />
    });
    return <div className="row g-3">
      {filteredEventsItems}
    </div>
  }
  return (
    <div>
      {
        isLoading ?
          <p>
            Loading content...
          </p>
          : error ?
            <p>
              Something goes wrong :(
            </p>
            :
            renderEvents()
      }
    </div>
  )
}
export default Events;