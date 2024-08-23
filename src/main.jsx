import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Router";
import AuthProvider from "./components/provider/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="max-w-screen-xl bg-opacity-25	bg-[#FFE9D0] mx-auto">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
