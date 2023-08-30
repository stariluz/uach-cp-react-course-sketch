import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import multiMonthPlugin from '@fullcalendar/multimonth'
import { DateRangeInput, EventInput } from "fullcalendar/index.js";
import esLocale from '@fullcalendar/core/locales/es';
import React2023Classes from "src/data/react-2023-classes.json"

const ReactSummary = () => {
  const validRange: DateRangeInput = {
    start: new Date(2023, 7, 14),
    end: new Date(2023, 11, 1),
  };
  const meetings = React2023Classes;
  const events: EventInput[] = meetings.map((meeting: any): EventInput => {
    return {
      title: meeting.title,
      start: meeting.start,
      end: meeting.end,
    }
  });
  console.log(events);

  return <div className="w-100">
    <FullCalendar
      plugins={[dayGridPlugin, multiMonthPlugin]}
      initialView={"customMultiMonth"}
      defaultAllDay={false}
      locale={esLocale}
      events={events}
      views={{
        customMultiMonth: {
          type: 'multiMonthYear',
          duration: { months: 4 },
          visibleRange: validRange,
          multiMonthMaxColumns: 2,
          validRange: validRange,
          weekends: false,
        }
      }}
    ></FullCalendar>
  </div >
}
export default ReactSummary;