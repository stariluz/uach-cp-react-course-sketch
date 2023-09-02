import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import ReactCourseHeader from "./components/Headers/ReactCourseHeader";

const ReactProjects = () => {
  return <>
    <ReactCourseHeader></ReactCourseHeader>

    <Outlet></Outlet>
  </>
}
export default ReactProjects;