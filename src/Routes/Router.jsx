import {
    createBrowserRouter,
  } from "react-router-dom";
import MainRoute from "../Main/MainRoute";
import Home from "../components/pages/Home/Home/Home";
import RecipeHome from "../components/pages/Recipe/RecipeHome/RecipeHome";
import FoodOrder from "../components/pages/Order/FoodOrder/FoodOrder";

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
          path: "/recipe",
          element:<RecipeHome></RecipeHome>
        },
        {
          path:'/order',
          element:<FoodOrder></FoodOrder>
        }
      ]
    },
  ]);