import { useParams } from "react-router-dom";

const TicketMasterEventDetail = () => {
  const { eventId } = useParams();
  console.log(eventId);

  return (
    <div>
      {eventId}
    </div>
  )
}
export default TicketMasterEventDetail;