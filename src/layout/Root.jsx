import { Outlet } from "react-router-dom";
import Naavvbar from "../Pages/Shared/Navbar/Naavvbar";


const Root = () => {
    return (
        <div>
           <Naavvbar></Naavvbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;