import { RouteObject } from "react-router-dom";
import { NoteDiffernce } from "./Pages/NoteDifference";
import { Layout } from "./components/layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <NoteDiffernce /> },
    ]
  },
];

export default routes;
