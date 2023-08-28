
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../views/Home/Home";
import ReactProjects from "../views/ReactProjects/ReactProjects";
import Error404 from "src/views/Error404/Error404";
import TicketMaster from "src/views/ReactProjects/TicketMaster/TicketMaster";
import TicketMasterHome from "src/views/ReactProjects/TicketMaster/TicketMasterHome/TicketMasterHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404></Error404>
  },
  {
    path: "react",
    element: <ReactProjects />,
    children: [
      {
        path: "summary",
        element: <div>Resumen</div>,
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
            element: <div>event</div>,
          },
        ]
      },
      {
        path: "calendar",
        element: <div>Calendario</div>,
      },
    ]
  }
]);

const RouterComponent = () => <RouterProvider router={router} />
export default RouterComponent;