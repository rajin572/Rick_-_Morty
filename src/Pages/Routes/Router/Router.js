import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main/Main";
import Home from "../../HomePage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
  //   {
  //     path: "*",
  //     element: <ErrorPage> </ErrorPage>,
  //   },
]);
export default router;
