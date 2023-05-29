import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MainPage from "../Pages/OurMenu/MainPage/MainPage";

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
        }
      ]
    },
  ]);

  export default(router)