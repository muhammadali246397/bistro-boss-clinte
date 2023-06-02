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
  ]);

  export default(router)