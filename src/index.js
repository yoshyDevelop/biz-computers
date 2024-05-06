import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ContactSection from "./pages/ContactSection";
import PaymentGateway from "./pages/PaymentGateway/PaymentGateway";
import ProductsSection from "./pages/ProductsSection";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      { 
        index: true, 
        element: <Home /> 
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <ContactSection />,
      },
      {
        path: "payment",
        element: <PaymentGateway />,
      },
      {
        path: "products",
        element: <ProductsSection />,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);