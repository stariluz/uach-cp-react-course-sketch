import { Outlet } from "react-router-dom";
import PythonCourseHeader from "./components/PythonCourseHeader/PythonCourseHeader";

const PythonCourse = () => {
  return <>
    <PythonCourseHeader></PythonCourseHeader>
    <Outlet></Outlet>
  </>
}
export default PythonCourse;