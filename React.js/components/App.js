import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js";
import Body from "./Body.js";
import About from "./About.js";
import Contact from "./Contact.js";

import Error from "./Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const styleCard = {
  backgroundColor: " #f0f0f0",
};

const Applayout = () => {
  return (
    <div className="App">
      <Header />
      {/* <Body /> */}
      <Outlet />
    </div>
  );
};

// const route_dom = createBrowserRouter([
//     {
//         path: '/',
//         element: <Applayout />,
//         errorElement: <Error />,
//     },
//     {
//         path: '/about',
//         element: <About />,
//     },
// ]);

const route_dom = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/contact", element: <Contact /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={route_dom} />);
