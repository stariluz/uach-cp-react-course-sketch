
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import Home from "../views/Home/Home";
import ReactProjects from "../views/ReactProjects/ReactProjects";
// import Error404 from "src/views/Error404/Error404";
import TicketMaster from "src/views/ReactProjects/TicketMaster/TicketMaster";
import TicketMasterHome from "src/views/ReactProjects/TicketMaster/TicketMasterHome/TicketMasterHome";
import TicketMasterEventDetail from "src/views/ReactProjects/TicketMaster/TicketMasterEventDetail/TicketMasterEventDetail";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  //   errorElement: <Error404></Error404>
  // },
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
            element: <TicketMasterEventDetail />,
          },
        ]
      },
      {
        path: "calendar",
        element: <div>Calendario</div>,
      },
    ]
  },
  {
    path: '*',
    element: <Navigate to={`react/ticket-master`} />
  }
]);

const RouterComponent = () => <RouterProvider router={router} />
export default RouterComponent;