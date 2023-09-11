import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import multiMonthPlugin from '@fullcalendar/multimonth'
import esLocale from '@fullcalendar/core/locales/es';
import { DateRangeInput, EventInput } from "fullcalendar/index.js";
import { useEffect, useState } from "react";
import './CourseCalendar.css';
import EventContent from "./EventContent/EventContent";

const CourseCalendar = (
  { meetings, visibleRange, numberOfMonths }:
    { meetings: any, visibleRange?: DateRangeInput, numberOfMonths?: number }
) => {

  visibleRange = visibleRange ? visibleRange : {
    start: new Date(2023, 7, 14),
    end: new Date(2023, 11, 1),
  };

  const events: EventInput[] = meetings.map((meeting: any, index: number): EventInput => {
    return {
      title: meeting.title,
      start: meeting.start,
      end: meeting.end,
      extendedProps: {
        content: meeting.content,
        sesionNumber: index + 1,
      }
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

  // const showEventContent = (arg: EventClickArg) => {
  //   console.log(arg.event.extendedProps.reference);
  //   refs.setReference(arg.event.extendedProps.reference.current);
  // }

  return (
    <div className="w-100">
      <FullCalendar
        plugins={[dayGridPlugin, multiMonthPlugin]}
        initialView={"customMultiMonth"}
        defaultAllDay={false}
        locale={esLocale}
        events={events}
        initialDate={visibleRange.start}
        stickyHeaderDates={false}
        stickyFooterScrollbar={false}
        views={{
          customMultiMonth: {
            type: 'multiMonthYear',
            duration: { months: numberOfMonths || 4 },
            visibleRange: visibleRange,
            multiMonthMaxColumns: 2,
            initialDate: visibleRange.start,
            weekends: false,
            stickyHeaderDates: false,
          }
        }}
        eventContent={(data) => <EventContent data={data} />}
        headerToolbar={{
          center: '',
          left: '',
          right: '',
        }}
        // eventClick={(arg) => showEventContent(arg)}
        contentHeight={'auto'}

        aspectRatio={matches ? 1.35 : 1}
      ></FullCalendar>
    </div >
  )
}
export default CourseCalendar;