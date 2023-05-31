import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MainPage from "../Pages/OurMenu/MainPage/MainPage";
import ShopMainPage from "../Pages/OurShop/ShopPage/ShopMainPage";

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
          element:<ShopMainPage></ShopMainPage>
        }
      ]
    },
  ]);

  export default(router)