import { useState } from 'react';
import eventsJSON from 'src/data/events.json';

const useEventsData = () => {
  const [data] = useState(eventsJSON);
  const { _embedded: { events } } = data;
  return {
    events,
  };
}
export default useEventsData;