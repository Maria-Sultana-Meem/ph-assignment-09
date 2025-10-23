import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import CardDetails from "../pages/CardDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
 {
    path:'/',
    Component:MainLayout,
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
         Component:MyProfile
    }
    ,
    {
         path:'/cardDetails/:serviceId',
         Component:CardDetails,
         loader:()=>fetch('/data.json')
    },
    {
     path:'/register',
     Component:Register
    },
    {
     path:'/login',
     Component:Login
    }




    ]
 }


])
export default router