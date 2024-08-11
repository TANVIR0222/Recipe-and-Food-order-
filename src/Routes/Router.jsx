import {
    createBrowserRouter,
  } from "react-router-dom";
import MainRoute from "../Main/MainRoute";
import Home from "../components/pages/Home/Home/Home";
import RecipeHome from "../components/pages/Recipe/RecipeHome/RecipeHome";
import FoodOrder from "../components/pages/Order/FoodOrder/FoodOrder";
import Viewpage from "../components/pages/Home/viewPage/Viewpage";
import Singup from "../components/UserAuth/Singup";
import Singin from "../components/UserAuth/Singin";
import Dashboard from "../Main/Dashboard";
import Cart from "../components/pages/Dashboard/cart/Cart";


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
        },
        {
          path:'/checkout/:id',
          element: <Viewpage></Viewpage>,
          loader:({params}) => fetch(`http://localhost:3000/ordermenu/${params.id}`)
        },
        {
          path:'/singin',
          element:<Singin></Singin>
        },
        {
          path:'/singup',
          element:<Singup></Singup>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>,
        },
      ]
    }
  ]);