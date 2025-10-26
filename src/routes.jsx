import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Main from "./Layout/Main";
import PageToRead from "./pages/PageToRead";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import ProtectedRoute from "./ProtectedRoute";


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
            element:<ProtectedRoute><BookDetails></BookDetails></ProtectedRoute>
         },
         {
            path:'/page',
            element:<ProtectedRoute><PageToRead></PageToRead></ProtectedRoute>
         },
         {
            path:'/login',
            element:<Login></Login>
         },
         {
            path:'/signUp',
            element:<SignUp></SignUp>
         }
      ]
   }
]);

export default router;
