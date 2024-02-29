import { createBrowserRouter } from "react-router-dom";
import PageLayout from "./PageLayout";
import Home from "../Page/HomePage/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout></PageLayout>,
     
      children:[
        {
            path:'/',
            element:<Home></Home>
            
        },
        // {
        //   path:'/login',
        //   element:<Login></Login>
        //  },
        //  {
        //   path:'/register',
        //   element:<Register></Register>
        //  },
        //  {
        //   path:"addproduct",
        //   element:<Privetroute><Addproduct></Addproduct></Privetroute>
        //  }
      ]
    },
  ]);