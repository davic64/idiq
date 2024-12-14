import { createBrowserRouter } from "react-router-dom";
import { Bible, Slides } from "./pages";
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
    ],
  },
];

export const router = createBrowserRouter(routes);
