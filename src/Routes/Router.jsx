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
import Allusers from "../components/pages/Dashboard/AllUsers/Allusers";
import PrivetRoute from "./PrivetRoute";
import Additem from "../components/pages/Dashboard/AddItem/Additem";
import AdminRoute from "./AdminRoute";


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
      element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children:[
        // user route
        {
          path:'cart',
          element:<Cart></Cart>,
        },

        // admin Route
        {
          path:'users',
          element:<AdminRoute><Allusers></Allusers></AdminRoute>,
        },
        {
          path:'additem',
          element:<AdminRoute><Additem></Additem></AdminRoute>,
        }
      ]
    }
  ]);