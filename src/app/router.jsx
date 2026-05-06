import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Tracking from "../pages/Tracking";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tracking",
    element: <Tracking />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);