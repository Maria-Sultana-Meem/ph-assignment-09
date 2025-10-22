import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import CardDetails from "../pages/CardDetails";

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
    }




    ]
 }


])
export default router