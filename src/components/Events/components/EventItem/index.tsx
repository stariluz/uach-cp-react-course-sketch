import { MouseEventHandler } from "react";
import styles from './styles.css'
import eventItemStyle from './EventItem.module.css';
const EventItem = ({ eventItem, onEventItemClick }: { eventItem: any, onEventItemClick: MouseEventHandler }) => {
  return (
    <div className="col-4">
      <div className="card p-0">
        {/* <img src={eventItem.images[0].url} alt={eventItem.name} className={`card-img-top`} /> */}
        <div className={`${eventItemStyle.imageContainer}`}>
          <img src={eventItem.images[0].url} alt={eventItem.name} className={`card-img-top ${eventItemStyle.fitImage}`} />
        </div>
        <div className={`card-body`}>
          <h3 className="card-title">
            {eventItem.name}
          </h3>
          <p className={`${eventItemStyle.itemDescription} card-text fs-6`}>
            {eventItem.info}
          </p>
          <button type="button" onClick={() => onEventItemClick(eventItem.id)}>Ver más</button>
        </div>
      </div>
    </div>
  )
}
export default EventItem;