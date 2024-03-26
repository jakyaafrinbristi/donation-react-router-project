import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

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
            element:<Donation></Donation>
        },
        {
            path: "/statistics",
            element:<Statistics></Statistics>
        },
       {
        path:"/donation-details/:id",
        element:<DonationDetails></DonationDetails>
       }
      ]
    },
  ]);
  export default router;