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
import SmartPhone from "./pages/Smartphone.jsx";
import About from "./pages/About.jsx";
import Agreement from "./pages/Agreement.jsx";
import Leadership from "./pages/Leadership.jsx";
import Privacy from "./pages/Privacy.jsx";
import PocoList from "./components/molecule/Smartphone/PocoList.jsx";
import XiaomiPro from "./pages/XiaomiPro.jsx";
import Checkout from "./pages/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/cart", element: <Cart /> },
      { path: "/account", element: <Account /> },
      { path: "/smartphone", element: <SmartPhone /> },
      { path: "/About", element: <About /> },
      { path: "/Agreement", element: <Agreement /> },
      { path: "/Leadership", element: <Leadership /> },
      { path: "/Privacy", element: <Privacy /> },
      { path: "/PocoList", element: <PocoList /> },
      { path: "/xiaomi", element: <XiaomiPro /> },
      { path: "*", element: <Error /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
