import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import HelpDesk from "./components/HelpDesk.jsx";
import Team from "./components/Team.jsx";
import Blog from "./components/Blog.jsx";
import Profile from "./components/Profile.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Default path for home
        element: <Home />, // Render the Home component here
      },
      {
        path: "/home", // Default path for home
        element: <Home />, // Render the Home component here
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/helpdesk",
        element: <HelpDesk />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/profile",
        element: <Profile />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
