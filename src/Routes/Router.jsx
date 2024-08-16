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
import ManegeItems from "../components/pages/Dashboard/manegeItems/ManegeItems";
import Update from "../components/pages/Dashboard/update/Update";
import Payment from "../components/pages/Dashboard/Payment/Payment";
import PaymentHistroy from "../components/pages/Dashboard/PaymentHistroy/PaymentHistroy";
import AdminHome from "../components/pages/Dashboard/AdminHome/AdminHome";
import Userhome from "../components/pages/Dashboard/userHome/Userhome";
import UseReview from "../components/pages/Dashboard/useReview/UseReview";
import About from "../components/pages/About/About";


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
          loader:({params}) => fetch(`http://localhost:3000/recipeMenu/${params.id}`)
        },
        {
          path:'/singin',
          element:<Singin></Singin>
        },
        {
          path:'/singup',
          element:<Singup></Singup>
        },
        {
          path:'/contact',
          element:<About></About>
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
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistroy></PaymentHistroy>
        },
        {
          path:'home',
          element:<Userhome></Userhome>
        },
        {
          path:'review',
          element:<UseReview></UseReview>
        },

        // admin Route
        {
          path:'users',
          element:<AdminRoute><Allusers></Allusers></AdminRoute>,
        },
        {
          path:'additem',
          element:<AdminRoute><Additem></Additem></AdminRoute>,
        },
        {
          path:'manageitem',
          element:<AdminRoute><ManegeItems></ManegeItems></AdminRoute>
        },
        {
          path:'update/:id',
          element:<AdminRoute><Update></Update></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/order/${params.id}`)
        },
        {
          path:'adminHome',
          element:<AdminHome></AdminHome>
        }

      ]
    }
  ]);