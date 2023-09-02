
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ReactProjects from "../views/ReactProjects/ReactProjects";
import TicketMaster from "src/views/ReactProjects/TicketMaster/TicketMaster";
import TicketMasterHome from "src/views/ReactProjects/TicketMaster/TicketMasterHome/TicketMasterHome";
import TicketMasterEventDetail from "src/views/ReactProjects/TicketMaster/TicketMasterEventDetail/TicketMasterEventDetail";
import ReactSummary from "src/views/ReactProjects/ReactSummary/ReactSummary";
import PythonCourse from "src/views/PythonCourse/PythonCourse";
import PythonCalendar from "src/views/PythonCourse/PythonCalendar/PythonCalendar";

const router = createBrowserRouter([
  {
    path: "react",
    element: <ReactProjects />,
    children: [
      {
        path: "calendar",
        element: <ReactSummary />,
      },
      {
        path: 'ticket-master',
        element: <TicketMaster />,
        children: [
          {
            path: "",
            element: <TicketMasterHome />,
          },
          {
            path: "event/:eventId",
            element: <TicketMasterEventDetail />,
          },
          {
            path: "*",
            element: <Navigate to={``} />
          }
        ]
      },
    ]
  },
  {
    path: "python",
    element: <PythonCourse />,
    children: [
      {
        path: "calendar",
        element: <PythonCalendar />,
      },
      {
        path: "",
        element: <Navigate to={`calendar`} />
      },
      {
        path: "*",
        element: <Navigate to={`calendar`} />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to={`react/ticket-master`} />
  }
], { basename: '/uach-react-course-sketch/' });

const RouterComponent = () => <RouterProvider router={router} />
export default RouterComponent;