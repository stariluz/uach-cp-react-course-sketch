
import { DateRangeInput } from "fullcalendar/index.js";
import CourseCalendar from "src/components/CourseCalendar/CourseCalendar";
import Python2023Course from "src/data/python-2023-course.json";


const PythonCalendar = () => {
  const meetings = Python2023Course;
  const visibleRange: DateRangeInput = {
    start: new Date(2023, 8, 1),
    end: new Date(2023, 10, 1),
  };

  return <CourseCalendar meetings={meetings} visibleRange={visibleRange} numberOfMonths={2}></CourseCalendar>
}

export default PythonCalendar;