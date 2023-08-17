import { MouseEventHandler } from "react";
import EventItem from "./components/EventItem/EventItem";
import useEventsData from "src/hooks/useEventsData";

// import eventSyle from './Events.modules.css';

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
    return <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 g-sm-3 g-md-4 ">
      {filteredEventsItems}
    </div>
  }
  return (
    <div className="">
      {
        isLoading ?
          <p>
            Cargando contenido...
          </p>
          : error ?
            <p>
              Algo salió mal D:
            </p>
            :
            renderEvents()
      }
    </div>
  )
}
export default Events;