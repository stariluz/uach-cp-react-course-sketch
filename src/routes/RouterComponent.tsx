
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ReactProjects from "../views/ReactProjects/ReactProjects";

import ReactSummary from "src/views/ReactProjects/ReactSummary/ReactSummary";
import PythonCourse from "src/views/PythonCourse/PythonCourse";
import PythonCalendar from "src/views/PythonCourse/PythonCalendar/PythonCalendar";
import Introduction2023 from "src/views/ReactProjects/Introduction2023/Introduction2023";
import GamesHome from "src/views/ReactProjects/Introduction2023/GamesHome/GamesHome";
import GameDetail from "src/views/ReactProjects/Introduction2023/GameDetail/GameDetail";

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
        path: 'games',
        element: <Introduction2023 />,
        children: [
          {
            path: "",
            element: <GamesHome />,
          },
          {
            path: ":gameId",
            element: <GameDetail />,
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
    element: <Navigate to={`react/games`} />
  }
], {
  basename: process.env.NODE_ENV === 'production'
    ? `/${import.meta.env.VITE_REPO_NAME}/`
    : '/',
}
);

const RouterComponent = () => <RouterProvider router={router} />
export default RouterComponent;