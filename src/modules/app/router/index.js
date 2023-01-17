import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const HomeView = lazy(() => import("../views/Home"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
]);
