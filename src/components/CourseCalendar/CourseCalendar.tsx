import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import multiMonthPlugin from '@fullcalendar/multimonth'
import esLocale from '@fullcalendar/core/locales/es';
import { DateRangeInput, EventInput } from "fullcalendar/index.js";
import { useEffect, useState } from "react";
import './CourseCalendar.css';

const EventContent = (eventInfo: EventInput) => {
  let start = new Date(eventInfo.event.start).getHours();
  let end = new Date(eventInfo.event.end).getHours();
  const startIsPm = Math.floor(start / 12) ? true : false;
  const endIsPm = Math.floor(end / 12) ? true : false;
  start = start % 12;
  end = end % 12
  return (
    <div className="custom-event">
      <b>{start}{startIsPm ? 'pm' : 'am'} - {end}{endIsPm ? 'pm' : 'am'}</b><br></br>
      <label className="fc-event-title">{eventInfo.event.title}</label>
    </div>
  );
}

const CourseCalendar = (
  { meetings, visibleRange, numberOfMonths }:
    { meetings: any, visibleRange?: DateRangeInput, numberOfMonths?: number }
) => {
  visibleRange = visibleRange ? visibleRange : {
    start: new Date(2023, 7, 14),
    end: new Date(2023, 11, 1),
  };
  const events: EventInput[] = meetings.map((meeting: any): EventInput => {
    return {
      title: meeting.title,
      start: meeting.start,
      end: meeting.end,
    }
  });

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 530px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 530px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return <div className="w-100">
    <FullCalendar
      plugins={[dayGridPlugin, multiMonthPlugin]}
      initialView={"customMultiMonth"}
      defaultAllDay={false}
      locale={esLocale}
      events={events}
      initialDate={visibleRange.start}
      views={{
        customMultiMonth: {
          type: 'multiMonthYear',
          duration: { months: numberOfMonths || 4 },
          visibleRange: visibleRange,
          multiMonthMaxColumns: 2,
          initialDate: visibleRange.start,
          weekends: false,
        }
      }}
      eventContent={EventContent}
      headerToolbar={{
        center: '',
        left: '',
        right: '',
      }}
      contentHeight={'auto'}

      aspectRatio={matches ? 1.35 : 1}
    ></FullCalendar>
  </div >
}
export default CourseCalendar;