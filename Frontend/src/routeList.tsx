import { RouteObject } from "react-router-dom";
import LoginedLayout from "./layouts/LoginedLayout";
import RootLayout from "./layouts/RootLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactByCategory from "./pages/ContactByCategory";
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
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/category/:categoryId",
        element: <ContactByCategory />,
      },
    ],
  },
];
export default routeList;
