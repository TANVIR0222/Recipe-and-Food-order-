import {
    createBrowserRouter,
  } from "react-router-dom";
import MainRoute from "../Main/MainRoute";
import Home from "../components/pages/Home/Home/Home";
import CategoryPage from "../components/pages/Home/CatagoryWarpper/CategoryPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/categories/:category",
          element:<CategoryPage></CategoryPage>
        },
        
      ]
    },
  ]);