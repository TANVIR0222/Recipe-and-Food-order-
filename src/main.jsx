import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Router";
import AuthProvider from "./components/provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-screen-xl	 mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
