import { MouseEventHandler } from "react";

const EventItem = ({ eventItem, onEventItemClick }: { eventItem: any, onEventItemClick: MouseEventHandler }) => {
  return (
    <div>
      <img src={eventItem.images[0].url} alt={eventItem.name} width={200} />
      <h3>
        {eventItem.name}
      </h3>
      <p>
        {eventItem.info}
      </p>
      <button type="button" onClick={() => onEventItemClick(eventItem.id)}>Ver más</button>
    </div>
  )
}
export default EventItem;