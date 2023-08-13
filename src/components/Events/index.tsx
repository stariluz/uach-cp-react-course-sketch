import { MouseEventHandler } from "react";
import EventItem from "./components/EventItem";
import useEventsData from "src/hooks/useEventsData";


const Events = ({ search }: { search: string }) => {
  const { events } = useEventsData();
  const handleEventItemClick: MouseEventHandler = (id: any) => {
    console.log(id);
  }
  const renderEvents = (): JSX.Element[] => {
    let filteredEvents = events;
    if (search && search.length > 0) {
      filteredEvents = filteredEvents.filter((event) => event.name.toLowerCase().includes(search))
    }
    return filteredEvents.map((event) => {
      return <EventItem
        key={`event-event-item-${event.id}`}
        eventItem={event}
        onEventItemClick={handleEventItemClick}
      />
    });

  }
  return (
    <div>
      {renderEvents()}
    </div>
  )
}
export default Events;