import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import CardDetails from "../pages/CardDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
 {
    path:'/',
    Component:MainLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
    {
         path:'/',
         Component:Home,
         loader:()=>fetch('/data.json')
    },
    {
         path:'/services',
         Component:Services,
          loader:()=>fetch('/data.json')
    },
    {
         path:'/myProfile',
         element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
    }
    ,
    {
         path:'/cardDetails/:serviceId',
         element:<CardDetails></CardDetails>,
         loader:()=>fetch('/data.json')
    },
    {
     path:'/register',
     Component:Register
    },
    {
     path:'/login',
     Component:Login
    },
    {
     path:'/about',
     Component:About
    },
    {
     path:'/contact',
     Component:ContactUs
    }




    ]
 }


])
export default router