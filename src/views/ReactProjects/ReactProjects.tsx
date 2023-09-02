import { Outlet } from "react-router-dom";
import ReactCourseHeader from "./components/ReactCourseHeader/ReactCourseHeader";

const ReactProjects = () => {
  return <>
    <ReactCourseHeader></ReactCourseHeader>
    <Outlet></Outlet>
  </>
}
export default ReactProjects;