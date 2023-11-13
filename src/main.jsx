import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
//import pages
import Home from "./pages/Home.jsx";
import Store from "./pages/Store.jsx";
import Cart from "./pages/Cart.jsx";
import Account from "./pages/Account.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Agreemnt from "./pages/Agreement.jsx";
import Leadership from "./pages/Leadership.jsx";
import Privasi from "./pages/Privasi.jsx";

{
  /*IMPORTANT: Other routes must go above error route */
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/cart", element: <Cart /> },
      { path: "/account", element: <Account /> },
      { path: "*", element: <Error /> },
      { path: "/About", element: <About /> },
      { path: "/Agreement", element: <Agreemnt /> },
      { path: "/Leadership", element: <Leadership /> },
      { path: "/Privasi", element: <Privasi /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
