import { RouteObject } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginedLayout from "./layouts/LoginedLayout";
import Contact from "./pages/Contact";
const routeList: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    element: <LoginedLayout />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];
export default routeList;
