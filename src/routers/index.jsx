import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Leadership from "../pages/Leadership";
import Agreement from "../pages/Agreement";
import Privasi from "../pages/Privasi";

export const router = createBrowserRouter([
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Leadership",
    element: <Leadership />,
  },
  {
    path: "/Agreement",
    element: <Agreement />,
  },
  {
    path: "/Privasi",
    element: <Privasi />,
  },
]);
