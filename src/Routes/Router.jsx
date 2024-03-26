import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<Error></Error>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/donation",
            element:<h1>mo mo</h1>
        },
       {
        path:"/donation-details/:id",
        element:<DonationDetails></DonationDetails>
       }
      ]
    },
  ]);
  export default router;