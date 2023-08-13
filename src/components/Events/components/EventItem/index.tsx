const EventItem = ({ eventItem, }: { eventItem: any }) => {
  console.log(eventItem);

  return (
    <div>
      <img src={eventItem.images[0].url} alt={eventItem.name} width={200} />
      <h3>
        {eventItem.name}
      </h3>
      <p>
        {eventItem.info}
      </p>
    </div>
  )
}
export default EventItem;