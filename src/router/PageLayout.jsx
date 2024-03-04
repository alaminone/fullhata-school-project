import { Outlet } from "react-router-dom";
import Navbar from "./nav/Navbar";


const PageLayout = () => {
    return (
        <div>
          
            <Navbar></Navbar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default PageLayout;