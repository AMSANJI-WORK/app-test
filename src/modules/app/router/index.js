import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const HomeView = lazy(() => import("../views/Home"));
const DefaultLayout = lazy(() => import("../layouts/Default"));
export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/home",
        element: <HomeView />,
      },
    ],
  },
]);
