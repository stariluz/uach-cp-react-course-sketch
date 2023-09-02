import CourseCalendar from "src/components/CourseCalendar/CourseCalendar";

import React2023Classes from "src/data/react-2023-classes.json";

const ReactSummary = () => {
  const meetings = React2023Classes;

  return <CourseCalendar meetings={meetings}></CourseCalendar>
}
export default ReactSummary;
