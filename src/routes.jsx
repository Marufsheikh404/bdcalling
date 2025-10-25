import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Main from "./Layout/Main";
import PageToRead from "./pages/PageToRead";
import Login from "./pages/Login";


const router = createBrowserRouter([
   {
      path:'/',
      element:<Main></Main>,
      children:[
         {
            path:'/',
            element:<Home></Home>
         },
         {
            path:'/bookdetails',
            element:<BookDetails></BookDetails>
         },
         {
            path:'/page',
            element:<PageToRead></PageToRead>
         },
         {
            path:'/login',
            element:<Login></Login>
         }
      ]
   }
]);

export default router;
