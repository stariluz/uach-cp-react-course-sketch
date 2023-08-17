import { useEffect, useState } from 'react';
import eventsJSON from 'src/data/events.json';

const useEventsData = () => {
  const [events, setEvents] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>("");
  useEffect(() => {
    // Load API Call
    setTimeout(() => {
      console.log("EFFECT");
      try {
        setEvents(eventsJSON._embedded.events);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }

    }, 1000)
  }, [])

  return {
    events,
    error,
    isLoading,
  };
}
export default useEventsData;