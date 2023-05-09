import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddChocolate from "./components/AddChocolate.jsx";
import Home from "./components/Home.jsx";
import EditChocolate from "./components/EditChocolate.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/chocolates"),
      },
      {
        path: "add-chocolate",
        element: <AddChocolate />,
      },
      {
        path: "edit-chocolates/:id",
        element: <EditChocolate />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chocolates/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
