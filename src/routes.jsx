import { createBrowserRouter } from "react-router-dom";
import { Bible, Slides, PreachingPage as Preaching } from "./pages";
import { Layout } from "./components/common/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Slides />,
      },
      {
        path: "bible",
        element: <Bible />,
      },
      {
        path: "preaching",
        element: <Preaching />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
