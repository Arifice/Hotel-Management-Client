import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/Registerpage/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
      ]
    },
  ]);

export default router;