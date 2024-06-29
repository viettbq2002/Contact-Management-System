import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routeList from "./routeList";

function App() {
  const router = createBrowserRouter(routeList);
  return <RouterProvider router={router} />;
}

export default App;
