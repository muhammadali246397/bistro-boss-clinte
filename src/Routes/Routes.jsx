import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MainPage from "../Pages/OurMenu/MainPage/MainPage";
import ShopMainPage from "../Pages/OurShop/ShopPage/ShopMainPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashbord from "../Layout/Dashbord/Dashbord";
import Mycart from "../Pages/DashbordPage/Mycart/Mycart";
import DashbordHome from "../Pages/DashbordPage/DashbordHome/DashbordHome";
import DashbordReservetion from "../Pages/DashbordPage/DashbordReservetion/DashbordReservetion";
import DsPayment from "../Pages/DashbordPage/DsPayment/DsPayment";
import DsReview from "../Pages/DashbordPage/DsReview/DsReview";
import DsBooking from "../Pages/DashbordPage/DsBooking/DsBooking";
import User from "../Pages/DashbordPage/AdminPanel/Users/User";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/ourmenu',
          element:<MainPage></MainPage>
        },
        {
          path:'/ourshop',
          element:<PrivateRoute><ShopMainPage></ShopMainPage></PrivateRoute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        }
      ]
    },
    {
      path:'dashbord',
      element:<PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
      children:[
        {
          path:'mycart',
          element:<Mycart></Mycart>
        },
        {
          path:'home',
          element:<DashbordHome></DashbordHome>
        },
        {
          path:'reservation',
          element:<DashbordReservetion></DashbordReservetion>
        },
        {
          path:'history',
          element:<DsPayment></DsPayment>
        },
        {
          path:'review',
          element:<DsReview></DsReview>
        },
        {
          path:'booking',
          element:<DsBooking></DsBooking>
        },
        {
          path:'user',
          element:<User></User>
        }
      ]
    }
  ]);

  export default(router)