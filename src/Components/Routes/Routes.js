import Dash from "../Dashboard/Dash";
import HomePage from "../HomePage/HomePage";
import DashLayout from "../Main/DashLayout";
import Movis from "../MovieCards/Movis";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Main/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/movies",
        element: <Movis></Movis>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashLayout></DashLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dash></Dash>
      }
    ]
  }
]);
export default router;
