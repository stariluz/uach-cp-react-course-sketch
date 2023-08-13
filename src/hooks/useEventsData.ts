import { useRef, useEffect } from 'react';
import eventsJSON from 'src/data/events.json';

const useEventsData = () => {
  const data = useRef(eventsJSON);
  const { _embedded: { events } } = data.current;
  // useEffect(()=>{
  //   // Load API Call
  //   setTimeout(()=>{
  //     data.current=eventsJSON;
  //   },5000)
  // },[])
  return {
    events,
  };
}
export default useEventsData;