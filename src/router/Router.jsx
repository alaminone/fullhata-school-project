import { createBrowserRouter } from "react-router-dom";
import PageLayout from "./PageLayout";
import Home from "../Page/HomePage/Home/Home";
import ErrorPage from "../Components/errorpage/ErrorPage";

import NewsPage from "../Page/newspage/NewsPage";
import Contact from "../Page/contactpage/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout></PageLayout>,
      errorElement:<ErrorPage></ErrorPage>,
     
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
        //  }
         {
          path:"/news",
          element:<NewsPage></NewsPage>
         },
         {
          path:"/contact",
          element:<Contact></Contact>
         }
      ]
    },
  ]);