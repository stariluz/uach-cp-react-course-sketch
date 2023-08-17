import { MouseEventHandler } from "react";
import eventItemStyles from './EventItem.module.css';

const EventItem = ({ eventItem, onEventItemClick }: { eventItem: any, onEventItemClick: MouseEventHandler }) => {
  return (
    <div className="col-4">
      <div className={`${eventItemStyles.card} card p-0`}>
        {/* <img src={eventItem.images[0].url} alt={eventItem.name} className={`card-img-top`} /> */}
        <div className={`${eventItemStyles.imageContainer} card-img-top `}>
          <img src={eventItem.images[0].url} alt={eventItem.name} className={`${eventItemStyles.fitImage}`} />
        </div>
        <div className={`${eventItemStyles.cardBody}`}>
          <h3 className="card-title">
            {eventItem.name}
          </h3>
          <p className={`${eventItemStyles.itemDescription} card-text`}>
            {eventItem.info}
          </p>
          <div className="d-grid">
            <button type="button" onClick={() => onEventItemClick(eventItem.id)} className={`${eventItemStyles.button}`}>Ver más</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EventItem;