import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Recommended from "./Components/Recommended";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "about-me", element: <AboutMe /> },
      { path: "experience", element: <Experience /> },
      { path: "recommended", element: <Recommended /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
