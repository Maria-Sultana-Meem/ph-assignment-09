import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";

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
         Component:Services
    },
    {
         path:'/myProfile',
         Component:MyProfile
    }




    ]
 }


])
export default router